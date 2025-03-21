import canvas from "canvas";
import fs from "fs";
import path from "path";
import opentype from "opentype.js";

const { loadImage, createCanvas } = canvas;

// Default font fallback
const DEFAULT_FONT = "Arial";

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

export function wrapText(ctx, font, text, x, y, maxWidth, lineHeight, totalHeight = 0) {
  const paragraphs = text.split("\\n");
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
  const totalTextHeight = wrappedLines.length * lineHeight;
  if (totalHeight) y = totalHeight / 2 - totalTextHeight / 2;
  
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
    textPath.fill = ctx.fillStyle;
    textPath.draw(ctx);
    y += lineHeight + 10;
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
  try {
    const name = Date.now();
    const { width, height } = size;
    const createdImage = [];
    let content_end = 0;

    // Load fonts using opentype.js with fallback to default font
    const titleFontPath = path.join(process.cwd(), "font", `${fontSettings.title_font}.ttf`);
    const contentFontPath = path.join(process.cwd(), "font", `${fontSettings.content_font}.ttf`);
    const creditFontPath = path.join(process.cwd(), "font", `${fontSettings.credit_font}.ttf`);

    const titleFont = await loadFont(titleFontPath);
    const contentFont = await loadFont(contentFontPath);
    const creditFont = await loadFont(creditFontPath);

    const dir = `./public/images/0`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    // Draw background
    const background = await loadImage(backgroundPath);
    ctx.drawImage(background, 0, 0, width, height);

    // Render Title
    if (hasTitle) {
      let italic = false;
      let bold = false;
      if (fontSettings.title_style.includes("italic")) italic = true;
      if (fontSettings.title_style.includes("bold")) bold = true;

      ctx.fillStyle = fontSettings.title_color;
      ctx.textAlign = fontSettings.title_align;

      if (titleFont) {
        wrapText(
          ctx,
          titleFont,
          titleText,
          positions.title.x * 3,
          positions.title.y * 3 + fontSettings.title_size,
          fontSettings.title_width,
          fontSettings.title_size
        );
      } else {
        // Fallback to default font
        ctx.font = `${italic ? "italic" : ""} ${bold ? "bold" : ""} ${
          fontSettings.title_size
        }px ${DEFAULT_FONT}`;
        wrapText(
          ctx,
          null, // No font object, use default
          titleText,
          positions.title.x * 3,
          positions.title.y * 3 + fontSettings.title_size,
          fontSettings.title_width,
          fontSettings.title_size,
          fontSettings.line_height
        );
      }
    }

    // Render Content
    if (contentText) {
      let italic = false;
      let bold = false;
      if (fontSettings.content_style.includes("italic")) italic = true;
      if (fontSettings.content_style.includes("bold")) bold = true;

      ctx.fillStyle = fontSettings.content_color;
      ctx.textAlign = fontSettings.content_align;

      if (contentFont) {
        content_end = wrapText(
          ctx,
          contentFont,
          contentText,
          positions.content.x * 3,
          positions.content.y * 3 + fontSettings.content_size,
          fontSettings.content_width,
          fontSettings.content_size,
          height
        );
      } else {
        // Fallback to default font
        ctx.font = `${italic ? "italic" : ""} ${bold ? "bold" : ""} ${
          fontSettings.content_size
        }px ${DEFAULT_FONT}`;
        content_end = wrapText(
          ctx,
          null, // No font object, use default
          contentText,
          positions.content.x * 3,
          positions.content.y * 3 + fontSettings.content_size,
          fontSettings.content_width,
          fontSettings.content_size,
          height
        );
      }
    }

    // Render Credit (Author)
    if (hasAuthor) {
      let italic = false;
      let bold = false;
      if (fontSettings.credit_style.includes("italic")) italic = true;
      if (fontSettings.credit_style.includes("bold")) bold = true;

      ctx.fillStyle = fontSettings.credit_color;
      ctx.textAlign = fontSettings.credit_align;

      if (creditFont) {
        wrapText(
          ctx,
          creditFont,
          creditText,
          positions.credit.x * 3,
          content_end + fontSettings.credit_size,
          fontSettings.credit_width,
          fontSettings.credit_size
        );
      } else {
        ctx.font = `${italic ? "italic" : ""} ${bold ? "bold" : ""} ${
          fontSettings.credit_size
        }px ${DEFAULT_FONT}`;
        wrapText(
          ctx,
          null,
          creditText,
          positions.credit.x * 3,
          content_end + fontSettings.credit_size,
          fontSettings.credit_width,
          fontSettings.credit_size,
          fontSettings.line_height
        );
      }
    }

    // Save the canvas to a file
    const outputPath = path.join(dir, `${name}.png`);
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(outputPath, buffer);
    createdImage.push(`${name}.png`);

    return createdImage;
  } catch (err) {
    throw err;
  }
}

export default generateImages;
