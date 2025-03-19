import { registerFont, loadImage, createCanvas } from "canvas";
import path from "path";
import fs from "fs";

export async function generateOutroImage(backgroundPath, logoPath, title, fontSettings, size) {
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
        fontSize: 70,
        playstore: 3,
        playstoreY: 170,
        playstoreHeight: 120,
        social: 5.5,
        socialY: 340,
        socialHeight: 90,
      },
      reel: {
        fontSize: 80,
        playstore: 3,
        social: 4.5,
        playstoreY: 210,
        playstoreHeight: 120,
        socialY: 400,
        socialHeight: 100,
      },
      video: {
        fontSize: 80,
        playstore: 5,
        playstoreY: 170,
        playstoreHeight: 120,
        social: 10,
        socialY: 320,
        socialHeight: 80,
      },
    };

    const background = await loadImage(backgroundPath);
    ctx.drawImage(background, 0, 0, width, height);
    let italic = "normal";
    let bold = 100;
    if (fontSettings.content_style.includes("italic")) italic = "italic";
    if (fontSettings.content_style.includes("bold")) bold = 600;
    ctx.font = `${positions[type].fontSize}px ${fontSettings.content_font}`;
    ctx.fillStyle = fontSettings.content_color;
    ctx.textAlign = fontSettings.content_align;

    //book logo
    const bookIcon = await loadImage(logoPath);
    ctx.drawImage(bookIcon, width / 2 - 350 / 2, height / 2 - 380, 350, 350);

    //title text
    ctx.fillText(title, width / 2, height / 2 + 100);

    //playstore logo
    const appLogoPath = path.join(process.cwd(), "public", "applogo.png");
    const applogo = await loadImage(appLogoPath);
    ctx.drawImage(
      applogo,
      width / 2 - width / positions[type].playstore,
      height / 2 + positions[type].playstoreY,
      (width * 2) / positions[type].playstore,
      positions[type].playstoreHeight
    );

    //social Logo
    const socialLogoPath = path.join(process.cwd(), "public", "social.png");
    const sociallogo = await loadImage(socialLogoPath);
    ctx.drawImage(
      sociallogo,
      width / 2 - width / positions[type].social,
      height / 2 + positions[type].socialY,
      (width * 2) / positions[type].social,
      positions[type].socialHeight
    );

    const dir = `./public/images/0`;
    const outputPath = path.join(dir, `outro.png`);
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(outputPath, buffer);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
