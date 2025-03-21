import canvas from "canvas";
import fs from "fs";
import path from "path";
import opentype from "opentype.js";
import { wrapText } from "./generateImage.js";

const { loadImage, createCanvas } = canvas;

export async function generateIntroImage(backgroundPath, logoPath, title, fontSettings, size) {
  try {
    const { width, height, type } = size;
    let bold = "";
    let italic = "";
    console.log(type);

    const fontPath = path.join(process.cwd(), "font", `${fontSettings.content_font}.ttf`);
    const font = await opentype.load(fontPath);

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

    const bookIcon = await loadImage(logoPath);
    ctx.drawImage(bookIcon, width / 2 - 400 / 2, height / 2 - 300, 400, 400);

    const fontSize = positions[type].fontSize;
    const textY = height / 2 + 280; // Starting Y position for text
    const maxWidth = width - width / 6; // Maximum width for text wrapping
    const textX = width / 12;

    ctx.fillStyle = fontSettings.content_color;
    ctx.textAlign = fontSettings.content_align;

    wrapText(ctx, font, title, textX, textY, maxWidth, fontSize);

    // Save the canvas to a file
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
