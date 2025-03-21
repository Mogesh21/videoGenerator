import canvas from "canvas";
import fs from "fs";
import path from "path";
import opentype from "opentype.js";
import { wrapText } from "./generateImage.js";

const { loadImage, createCanvas } = canvas;

export async function generateOutroImage(backgroundPath, logoPath, title, fontSettings, size) {
  try {
    const { width, height, type } = size;
    console.log(type);

    // Load the font using opentype.js
    const fontPath = path.join(process.cwd(), "font", `${fontSettings.content_font}.ttf`);
    const font = await opentype.load(fontPath);

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    const positions = {
      post: {
        logo: 320,
        fontSize: 70,
        text: 60,
        playstore: 3,
        playstoreY: 20,
        playstoreHeight: 120,
        social: 6,
        socialY: 160,
        socialHeight: 80,
      },
      reel: {
        logo: 350,
        fontSize: 85,
        playstore: 3,
        text: 90,
        social: 4.5,
        playstoreY: 30,
        playstoreHeight: 120,
        socialY: 180,
        socialHeight: 100,
      },
      video: {
        logo: 350,
        fontSize: 85,
        text: 80,
        playstore: 5,
        playstoreY: 20,
        playstoreHeight: 120,
        social: 10,
        socialY: 160,
        socialHeight: 80,
      },
    };

    // Draw background
    const background = await loadImage(backgroundPath);
    ctx.drawImage(background, 0, 0, width, height);

    // Set font style
    let italic = false;
    let bold = false;
    if (fontSettings.content_style.includes("italic")) italic = true;
    if (fontSettings.content_style.includes("bold")) bold = true;

    // Draw book logo
    const bookIcon = await loadImage(logoPath);
    ctx.drawImage(
      bookIcon,
      width / 2 - 350 / 2,
      height / 2 - 410,
      positions[type].logo,
      positions[type].logo
    );

    // Render text with opentype.js
    const fontSize = positions[type].fontSize;
    const maxWidth = width - width / 6; // Maximum width for text wrapping
    const textX = width / 12;
    const textY = height / 2 + positions[type].text; // Position for text

    ctx.fillStyle = fontSettings.content_color;
    ctx.textAlign = "center";8

    const y = wrapText(ctx, font, title, textX, textY, maxWidth, fontSize);

    // Draw playstore logo
    const appLogoPath = path.join(process.cwd(), "public", "applogo.png");
    const applogo = await loadImage(appLogoPath);
    ctx.drawImage(
      applogo,
      width / 2 - width / positions[type].playstore,
      y + positions[type].playstoreY,
      (width * 2) / positions[type].playstore,
      positions[type].playstoreHeight
    );

    // Draw social logo
    const socialLogoPath = path.join(process.cwd(), "public", "social.png");
    const sociallogo = await loadImage(socialLogoPath);

    ctx.drawImage(
      sociallogo,
      width / 2 - width / positions[type].social,
      y + positions[type].socialY,
      (width * 2) / positions[type].social,
      positions[type].socialHeight
    );

    // Save the canvas to a file
    const dir = `./public/images/0`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const outputPath = path.join(dir, `outro.png`);
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(outputPath, buffer);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
