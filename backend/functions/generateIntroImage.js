import { registerFont, loadImage, createCanvas } from "canvas";
import path from "path";
import fs from "fs";

function wrapText(ctx, text, x, y, maxWidth) {
  const paragraphs = text.split("\\n");
  let wrappedLines = [];

  paragraphs.forEach((paragraph) => {
    const words = paragraph.split(" ");
    let line = "";

    for (const word of words) {
      const testLine = line + word + " ";
      const metrics = ctx.measureText(testLine);

      if (metrics.width > maxWidth && line !== "") {
        wrappedLines.push(line);
        line = word + " ";
      } else {
        line = testLine;
      }
    }
    wrappedLines.push(line);
  });

  const xVal = x;
  wrappedLines.forEach((line) => {
    ctx.fillText(line, xVal, y);
    y += 130;
  });

  return y;
}

export async function generateIntroImage(backgroundPath, logoPath, title, fontSettings, size) {
  try {
    const { width, height, type } = size;
    console.log(type);

    const fontPath = path.join(process.cwd(), "font", `${fontSettings.content_font}.ttf`);
    if (fontSettings.content_font && fontSettings.content_font !== "Sans Serif") {
      registerFont(fontPath, { family: fontSettings.content_font });
    }
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    const positions = {
      post: {
        fontSize: 90,
      },
      reel: {
        fontSize: 100,
      },
      video: {
        fontSize: 100,
      },
    };

    const background = await loadImage(backgroundPath);
    ctx.drawImage(background, 0, 0, width, height);

    if (fontSettings.content_style.includes("italic")) italic = "italic";
    if (fontSettings.content_style.includes("bold")) bold = 600;
    ctx.font = `${positions[type].fontSize}px ${fontSettings.content_font}`;
    ctx.fillStyle = fontSettings.content_color;
    ctx.textAlign = fontSettings.content_align;

    //book logo
    const bookIcon = await loadImage(logoPath);
    ctx.drawImage(bookIcon, width / 2 - 400 / 2, height / 2 - 300, 400, 400);

    //title text
    ctx.fillText(title);
    wrapText(ctx, title, width / 2, height / 2 + 280, width - width / 6);

    const dir = `./public/images/0`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const outputPath = path.join(dir, `intro.png`);
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(outputPath, buffer);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
