import canvas from "canvas";
import fs from "fs";
import path from "path";
import fetch from "node-fetch";

const { loadImage, createCanvas, registerFont } = canvas;

// function wrapText(ctx, text, x, y, maxWidth, lineHeight, totalHeight = 0) {
//   const align = ctx.textAlign;
//   const xVal = align === "center" ? x + maxWidth / 2 : align === "right" ? x + maxWidth : x;
//   const paragraphs = text.split("\\n");
//   paragraphs.forEach((paragraph) => {
//     const words = paragraph.split(" ");
//     let line = "";
//     for (const word of words) {
//       const testLine = line + word + " ";
//       const metrics = ctx.measureText(testLine);
//       if (metrics.width > maxWidth && line !== "") {
//         ctx.fillText(line, xVal, y);
//         line = word + " ";
//         y += lineHeight;
//       } else {
//         line = testLine;
//       }
//     }
//     console.log(line);
//     ctx.fillText(line, xVal, y);
//     y += lineHeight;
//   });
//   return y;
// }

function wrapText(ctx, text, x, y, maxWidth, lineHeight, totalHeight = 0) {
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

  const align = ctx.textAlign;
  const xVal = align === "center" ? x + maxWidth / 2 : align === "right" ? x + maxWidth : x;

  const totalTextHeight = wrappedLines.length * lineHeight;
  if (totalHeight) y = totalHeight / 2 - totalTextHeight / 2;

  wrappedLines.forEach((line) => {
    ctx.fillText(line, xVal, y);
    y += lineHeight;
  });

  return y;
}

async function generateImages(
  backgroundPath,
  { titleText, contentText, creditText },
  positions,
  fontSettings,
  hasTitle,
  hasAuthor,
  size
) {
  const name = Date.now();
  const { width, height } = size;
  const createdImage = [];
  let content_end = 0;

  const fontPath = path.join(process.cwd(), "font", `${fontSettings.title_font}.ttf`);
  const fontPath2 = path.join(process.cwd(), "font", `${fontSettings.content_font}.ttf`);
  const fontPath3 = path.join(process.cwd(), "font", `${fontSettings.credit_font}.ttf`);
  if(fontSettings.title_font)registerFont(fontPath, { family: fontSettings.title_font });
  if(fontSettings.content_font)registerFont(fontPath2, { family: fontSettings.content_font });
  if(fontSettings.credit_font)registerFont(fontPath3, { family: fontSettings.credit_font });

  const dir = `./public/images/0`;
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  const background = await loadImage(backgroundPath);
  ctx.drawImage(background, 0, 0, width, height);

  if (hasTitle) {
    let italic = "normal";
    let bold = 100;
    if (fontSettings.title_style.includes("italic")) italic = "italic";
    if (fontSettings.title_style.includes("bold")) bold = 600;
    ctx.font = `${italic} ${bold} ${fontSettings.title_size}px ${fontSettings.title_font}`;
    ctx.fillStyle = fontSettings.title_color;
    ctx.textAlign = fontSettings.title_align;
    wrapText(
      ctx,
      titleText,
      positions.title.x * 3,
      positions.title.y * 3 + fontSettings.title_size,
      fontSettings.title_width,
      (fontSettings.title_size / fontSettings.line_height) * 100
    );
  }

  // Render Content
  if (contentText) {
    let italic = "normal";
    let bold = 100;
    if (fontSettings.content_style.includes("italic")) italic = "italic";
    if (fontSettings.content_style.includes("bold")) bold = 600;
    ctx.font = `${italic} ${bold} ${fontSettings.content_size}px ${fontSettings.content_font}`;
    ctx.fillStyle = fontSettings.content_color;
    ctx.textAlign = fontSettings.content_align;
    content_end = wrapText(
      ctx,
      contentText,
      positions.content.x * 3,
      positions.content.y * 3 + fontSettings.content_size,
      fontSettings.content_width,
      (fontSettings.content_size / fontSettings.line_height) * 100,
      // fontSettings.content_height,
      height
    );
  }

  // Render Credit (Author)
  if (hasAuthor) {
    let italic = "normal";
    let bold = 100;
    if (fontSettings.credit_style.includes("italic")) italic = "italic";
    if (fontSettings.credit_style.includes("bold")) bold = 600;
    ctx.font = `${italic} ${bold} ${fontSettings.credit_size}px ${fontSettings.credit_font}`;
    ctx.fillStyle = fontSettings.credit_color;
    ctx.textAlign = fontSettings.credit_align;
    wrapText(
      ctx,
      creditText,
      positions.credit.x * 3,
      content_end + fontSettings.credit_size,
      fontSettings.credit_width,
      (fontSettings.credit_size / fontSettings.line_height) * 100
    );
  }

  const outputPath = path.join(dir, `${name}.png`);
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(outputPath, buffer);
  createdImage.push(`${name}.png`);

  return createdImage;
}

export default generateImages;
