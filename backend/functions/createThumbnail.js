import canvas from "canvas";
import fs from "fs";
import path from "path";
import opentype from "opentype.js";
import axios from "axios";

const { loadImage, createCanvas } = canvas;

const DEFAULT_FONT = "Arial";

function roundedRect(ctx, x, y, width, height, radius) {
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
  radius = false
) {
  const paragraphs = text.split("\n");
  let wrappedLines = [];

  paragraphs.forEach((paragraph) => {
    const words = paragraph.split(" ");
    let line = "";

    for (const word of words) {
      const testLine = line + word + " ";
      const testWidth = font.getAdvanceWidth(testLine, lineHeight);

      if (testWidth > maxWidth && line !== "") {
        wrappedLines.push(line);
        line = word + " ";
      } else {
        line = testLine;
      }
    }
    wrappedLines.push(line);
  });

  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  roundedRect(
    ctx,
    x,
    y - lineHeight,
    maxWidth,
    wrappedLines.length * lineHeight + lineHeight / 2,
    radius ? 20 : 0
  );
  ctx.fill();

  wrappedLines.forEach((line) => {
    const align = ctx.textAlign;
    const testWidth = font.getAdvanceWidth(line, lineHeight);
    const xVal =
      align === "center"
        ? x + maxWidth / 2 - testWidth / 2
        : align === "right"
        ? x + maxWidth - testWidth
        : x;

    const textPath = font.getPath(line, xVal, y, lineHeight);
    textPath.fill = color;
    textPath.draw(ctx);
    y += lineHeight;
  });
  return y;
}

async function createThumbnail({
  backgroundPath,
  content: { text, images, options },
  positions,
  font,
  size,
}) {
  try {
    // const { width, height } = JSON.parse(size);
    const width = 1080,
      height = 1920;
    const createdImage = [];

    const fontPath = path.join(process.cwd(), "font", `${font.style}.ttf`);
    const fontStyle = await loadFont(fontPath);

    const dir = `./public/images/0`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const canvas = createCanvas(parseInt(width), parseInt(height));
    const ctx = canvas.getContext("2d");

    const background = await loadImage(backgroundPath);
    ctx.drawImage(background, 0, 0, parseInt(width), parseInt(height));

    const question = text.map((val) => val.trim()).filter((val) => val);

    let currentY = positions.content.y;

    //content
    if (question.length > 0) {
      let italic = false,
        bold = false;
      if (font.content.italic) italic = true;
      if (font.content.bold) bold = true;

      ctx.fillStyle = font.content.color;
      ctx.textAlign = font.content.align;

      if (fontStyle) {
        question.forEach((line, index) => {
          const radius = index === 0 ? true : question.length - 1 === index ? true : false;
          currentY = wrapText(
            ctx,
            { font: fontStyle, color: font.content.color, size: font.content.size },
            line,
            positions.content.x,
            currentY + font.content.lineHeight / 2,
            font.content.width,
            font.content.size + font.content.lineHeight,
            radius
          );
        });
      } else {
        question.forEach((line, index) => {
          const radius = index === 0 ? true : question.length - 1 === index ? true : false;
          ctx.font = `${italic ? "italic" : ""} ${bold ? "bold" : ""} ${
            font.content_size
          }px ${DEFAULT_FONT}`;

          currentY = wrapText(
            ctx,
            { font: null, color: font.content.color, size: font.content.size },
            line,
            positions.content.x,
            currentY,
            font.content.width,
            font.content.size + font.content.lineHeight,
            radius
          );
        });
      }
    }

    //images
    if (images.length > 0) {
      const newImages = await downloadImages(images);
      console.log(newImages);

      const imageElements = await Promise.all(newImages.map((img) => loadImage(img)));

      const xVal =
        font.content.align === "center"
          ? positions.content.x + font.content.width / 2 - font.image.width / 2
          : font.content.align === "right"
          ? positions.content.x + font.content.width / 2 - font.image.width
          : positions.content.x;
      imageElements.forEach((currentImage) => {
        ctx.drawImage(currentImage, xVal, currentY, font.image.width, font.image.height);
      });
    }

    //options
    let OptionY = positions.options[0].y;
    options.forEach((option, index) => {
      if (option) {
        let italic = false,
          bold = false;
        if (font.options.italic) italic = true;
        if (font.options.bold) bold = true;

        ctx.fillStyle = font.options.color;
        ctx.textAlign = font.options.align;

        if (fontStyle) {
          OptionY = wrapText(
            ctx,
            { font: fontStyle, color: font.options.color, size: font.options.size },
            option,
            positions.options[index].x,
            OptionY + font.options.size > positions.options[index].y
              ? OptionY + font.options.size + font.options.lineHeight
              : positions.options[index].y,
            font.options.width,
            font.options.size + font.options.lineHeight,
            true
          );
          if (positions.options[index + 1]?.y) console.log(OptionY, positions.options[index + 1].y);
        } else {
          ctx.font = `${italic ? "italic" : ""} ${bold ? "bold" : ""} ${
            font.content_size
          }px ${DEFAULT_FONT}`;
          OptionY = wrapText(
            ctx,
            { font: null, color: font.options.color, size: font.options.size },
            option,
            positions.options[index].x,
            positions.options[index].y,
            font.options.width,
            font.options.size + font.content.lineHeight,
            true
          );
        }
      }
    });

    const outputPath = path.join(dir, `thumbnail.png`);
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(outputPath, buffer);
    createdImage.push(`thumbnail.png`);

    return createdImage;
  } catch (err) {
    throw err;
  }
}

export default createThumbnail;
