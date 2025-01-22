import axios from "axios";
import canvas from "canvas";
import fs from "fs";
import path from "path";

const { loadImage, createCanvas, registerFont } = canvas;

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
  return y + lineHeight;
}

async function generateImages(
  backgroundPath,
  title,
  content,
  author,
  id,
  size,
  single = false,
  fontStyle = "Noto Sans"
) {
  const name = Date.now();
  const width = size.width;
  const height = size.height;
  const padding = 80;
  const createdImage = [];

  const fontPack = {
    "Noto Sans": {
      normal: "NotoSans-Regular.ttf",
      bold: "NotoSans-Bold",
      bolditalic: "NotoSans-BoldItalic.ttf",
      italic: "NotoSans-Italic.ttf",
    },
    Kanit: {
      normal: "Kanit-Regular.ttf",
      bold: "Kanit-Bold.ttf",
      bolditalic: "Kanit-BoldItalic.ttf",
      italic: "Kanit-Italic.ttf",
    },
    "Noto Serif": {
      normal: "NotoSerif.ttf",
      bold: "NotoSerif_Bold.ttf",
      bolditalic: "NotoSerif_BoldItalic.ttf",
      italic: "NotoSerif_Italic.ttf",
    },
    Playfair: {
      normal: "PlayfairDisplay.ttf",
      bold: "PlayfairDisplay-Bold.ttf",
      bolditalic: "PlayfairDisplay-BoldItalic.ttf",
      italic: "PlayfairDisplay-Italic.ttf",
    },
    Poppins: {
      normal: "Poppins-Regular.ttf",
      bold: "Poppins-Bold.ttf",
      bolditalic: "Poppins-BoldItalic.ttf",
      italic: "Poppins-Italic.ttf",
    },
    Roboto: {
      normal: "Roboto-Regular.ttf",
      bold: "Roboto-Bold.ttf",
      bolditalic: "Roboto-BoldItalic.ttf",
      italic: "Roboto-Italic.ttf",
    },
    SourGummy: {
      normal: "SourGummy.ttf",
      bold: "SourGummy_Bold.ttf",
      bolditalic: "SourGummy_BoldItalic.ttf",
      italic: "SourGummy_Italic.ttf",
    },
  };

  // registerFont(path.join(process.cwd(), "font", fontPack[fontStyle][title.style || "normal"]), {
  //   family: `${fontStyle}-${title.style || "normal"}`,
  // });
  registerFont(path.join(process.cwd(), "font", fontPack[fontStyle][content.style || "normal"]), {
    family: `${fontStyle}-${content.style || "normal"}`,
  });

  const dir = `./public/images/${id}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const adjustFontSize = (ctx, fontTemplate, textArray, maxHeight, maxWidth) => {
    let fontSize = parseInt(fontTemplate.match(/\d+/)[0]);
    let lineHeight = fontSize + 10;
    let fits = false;

    while (!fits) {
      ctx.font = fontTemplate.replace(/\d+/, fontSize);
      lineHeight = fontSize + 10;

      const totalHeight = textArray.reduce((acc, line) => {
        const metrics = ctx.measureText(line);
        const testWidth = metrics.width;
        return (
          acc + (testWidth > maxWidth ? Math.ceil(testWidth / maxWidth) * lineHeight : lineHeight)
        );
      }, 0);

      if (totalHeight + lineHeight * 2 <= maxHeight || fontSize <= 10) {
        fits = true;
      } else {
        fontSize -= 2;
      }
    }
    return { fontSize, lineHeight };
  };

  const wrapAndDrawText = (ctx, text, x, y, maxWidth, lineHeight) => {
    const words = text.split(" ");
    let line = "";

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;

      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, y);
        line = words[n] + " ";
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);
    return y + lineHeight;
  };

  const data = typeof content.text === "string" ? content.text.split("\\n") : content.text;

  for (let i = 0; i < data.length; i++) {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    const background = await loadImage(backgroundPath);
    ctx.drawImage(background, 0, 0, width, height);

    const textAreaHeight = height - padding * 4;
    const textMaxWidth = width - padding * 2;

    const { fontSize, lineHeight } = adjustFontSize(
      ctx,
      `${content.size}px ${fontStyle}-${content.style || "normal"}`,
      data,
      textAreaHeight,
      textMaxWidth
    );

    ctx.font = `${fontSize}px ${fontStyle}`;
    ctx.fillStyle = content.color;
    ctx.textAlign = "left";

    const contentAreaHeight = data.reduce((acc, line) => {
      const metrics = ctx.measureText(line);
      return (
        acc +
        (metrics.width > textMaxWidth
          ? Math.ceil(metrics.width / textMaxWidth) * lineHeight
          : lineHeight)
      );
    }, 0);

    const startY = (height - contentAreaHeight - lineHeight) / 2;

    let y = startY;
    data.forEach((line) => {
      y = wrapAndDrawText(ctx, line, padding, y, textMaxWidth, lineHeight);
    });

    registerFont(path.join(process.cwd(), "font", fontPack[fontStyle][author.style || "normal"]), {
      family: `${fontStyle}-${author.style || "normal"}`,
    });

    ctx.font = `${fontSize < author.size ? fontSize : author.size}px ${fontStyle}-${
      author.style || "normal"
    }`;
    ctx.fillStyle = author.color;
    ctx.textAlign = "right";
    ctx.fillText(`- ${author.text}`, width - padding, y + lineHeight / 2);

    const outputPath = path.join(
      process.cwd(),
      "public",
      "images",
      id.toString(),
      `${name}_${i + 1}.png`
    );

    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(outputPath, buffer);
    createdImage.push(`${name}_${i + 1}.png`);
  }

  console.log("All images generated successfully!");
  return createdImage;
}

export default generateImages;
