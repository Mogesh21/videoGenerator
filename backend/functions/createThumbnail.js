import canvas from "canvas";
import fs from "fs";
import path from "path";
import opentype from "opentype.js";
import axios from "axios";

const { loadImage, createCanvas } = canvas;

const DEFAULT_FONT = "Arial";

function roundedRect(ctx, x, y, width, height, radius, bgColor) {
  ctx.moveTo(x - 10 + radius, y);
  ctx.lineTo(x - 10 + width + 20 - radius, y);
  ctx.quadraticCurveTo(x - 10 + width + 20, y, x - 10 + width + 20, y + radius);
  ctx.lineTo(x - 10 + width + 20, y + height - radius);
  ctx.quadraticCurveTo(x - 10 + width + 20, y + height, x - 10 + width + 20 - radius, y + height);
  ctx.lineTo(x - 10 + radius, y + height);
  ctx.quadraticCurveTo(x - 10, y + height, x - 10, y + height - radius);
  ctx.lineTo(x - 10, y + radius);
  ctx.quadraticCurveTo(x - 10, y, x - 10 + radius, y);
  ctx.closePath();
  ctx.fillStyle = bgColor || "#ffffff";
  ctx.fill();
}

export async function loadFont(fontPath, defaultFont = DEFAULT_FONT) {
  try {
    if (fs.existsSync(fontPath)) {
      return await opentype.load(fontPath);
    } else {
      console.warn(`Font file not found: ${fontPath}. Falling back to ${defaultFont}.`);
      return null;
    }
  } catch (error) {
    console.error(`Error loading font: ${fontPath}`, error);
    return null;
  }
}

export async function downloadImages(images) {
  try {
    const tempDir = path.join(process.cwd(), "public", "images", "0");

    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    const imagePromises = images.map(async (image, index) => {
      const response = await axios.get(image, { responseType: "arraybuffer" });
      const imagePath = path.join(tempDir, `content_${index}.png`);
      fs.writeFileSync(imagePath, response.data);
      return imagePath;
    });

    const newImages = await Promise.all(imagePromises);

    return newImages;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export function wrapText(
  ctx,
  { font, color, size },
  text,
  x,
  y,
  maxWidth,
  lineHeight,
  radius = false,
  bgColor,
  bg
) {
  const paragraphs = text.split("\n");
  let wrappedLines = [];
  let optionPosition = [];

  paragraphs.forEach((paragraph) => {
    const words = paragraph.split(" ");
    let line = "";

    for (const word of words) {
      const testLine = line + word + " ";
      const testWidth = font.getAdvanceWidth(testLine, size);

      if (testWidth > maxWidth && line !== "") {
        wrappedLines.push(line);
        line = word + " ";
      } else {
        line = testLine;
      }
    }
    wrappedLines.push(line);
  });

  if (bg) {
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    roundedRect(
      ctx,
      x,
      y - size,
      maxWidth,
      wrappedLines.length * size + size / 2,
      radius ? 20 : 0,
      bgColor
    );
    ctx.fill();
  }
  wrappedLines.forEach((line) => {
    const align = ctx.textAlign;
    const testWidth = font.getAdvanceWidth(line, size);
    const xVal =
      align === "center"
        ? x + maxWidth / 2 - testWidth / 2
        : align === "right"
        ? x + maxWidth - testWidth
        : x;

    const textPath = font.getPath(line, xVal, y, size);
    textPath.fill = color;
    textPath.draw(ctx);
    optionPosition.push(y);
    y += size;
  });

  return [y, wrappedLines, optionPosition];
}

async function createThumbnail({
  backgroundImagePath,
  content: { text, images, options },
  positions,
  font,
  size,
}) {
  try {
    let newImages = [];
    const wrappedQuestion = [];
    const wrappedOptions = [];
    const optionPosition = [];

    const fontPath = path.join(process.cwd(), "font", `${font.style}.ttf`);
    const fontStyle = await loadFont(fontPath);

    const dir = `./public/images/0`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const canvas = createCanvas(parseInt(size.width), parseInt(size.height));
    const ctx = canvas.getContext("2d");

    const background = await loadImage(backgroundImagePath);
    ctx.drawImage(background, 0, 0, parseInt(size.width), parseInt(size.height));

    const question = text.map((val) => val.trim()).filter((val) => val);

    let currentY = positions.question.y;

    //content
    if (question.length > 0) {
      ctx.fillStyle = font.question.color;
      ctx.textAlign = font.question.align;

      if (fontStyle) {
        question.forEach((line, index) => {
          let wrappedLine = "";
          const radius = index === 0 ? true : question.length - 1 === index ? true : false;
          [currentY, wrappedLine] = wrapText(
            ctx,
            { font: fontStyle, color: font.question.color, size: font.question.size },
            line,
            positions.question.x,
            currentY + font.question.lineHeight / 2,
            font.question.width,
            font.question.lineHeight,
            radius,
            font.question.bgColor,
            font.question.bg
          );

          wrappedQuestion.push(wrappedLine);
        });
      }
      // else {
      //   question.forEach((line, index) => {
      //     let wrappedLine = "";
      //     const radius = index === 0 ? true : question.length - 1 === index ? true : false;
      //     ctx.font = `${italic ? "italic" : ""} ${bold ? "bold" : ""} ${
      //       font.question_size
      //     }px ${DEFAULT_FONT}`;

      //     [currentY, wrappedLine] = wrapText(
      //       ctx,
      //       { font: null, color: font.question.color, size: font.question.size },
      //       line,
      //       positions.question.x,
      //       currentY,
      //       font.question.width,
      //       font.question.size + font.question.lineHeight,
      //       radius
      //     );
      //     wrappedQuestion.push(wrappedLine);
      //   });
      // }
    }

    //images
    if (images.length > 0) {
      newImages = await downloadImages(images);
      const imageElements = await Promise.all(newImages.map((img) => loadImage(img)));
      const xVal = positions.images.x;
      //   font.question.align === "center"
      //     ? positions.images.x + font.image.width / 2 - font.image.width / 2
      //     : font.image.align === "right"
      //     ? positions.images.x + font.image.width / 2 - font.image.width
      //     : positions.images.x;
      imageElements.forEach((currentImage) => {
        ctx.drawImage(currentImage, xVal, positions.images.y, font.image.width, font.image.height);
      });
    }

    //options
    let OptionY = positions.options.y;
    options.forEach((option, index) => {
      if (option) {
        let wrappedLine = "";
        let optionPos = [];

        ctx.fillStyle = font.options.color;
        ctx.textAlign = font.options.align;

        if (fontStyle) {
          [OptionY, wrappedLine, optionPos] = wrapText(
            ctx,
            { font: fontStyle, color: font.options.color, size: font.options.size },
            option,
            positions.options.x,
            OptionY + font.options.size > positions.options.y
              ? OptionY + font.options.size
              : positions.options.y,
            font.options.width,
            font.options.lineHeight,
            true,
            font.options.bgColor,
            font.options.bg
          );
          wrappedOptions.push(wrappedLine);
          optionPosition.push(optionPos);
        }
      }
    });

    const textPath = fontStyle.getPath("interviewbix.com", 330, 1870, 50);
    textPath.fill = font.question.color;
    textPath.draw(ctx);

    const outputPath = path.join(dir, `thumbnail.png`);
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(outputPath, buffer);

    const optionLength = wrappedOptions.reduce((acc, val, i) => {
      const prev = acc[i - 1] || 0;
      acc.push(prev + val.length);
      return acc;
    }, []);

    return [
      newImages,
      wrappedQuestion.flat(),
      wrappedOptions.flat(),
      optionPosition.flat(),
      optionLength,
    ];
  } catch (err) {
    throw err;
  }
}

export default createThumbnail;
