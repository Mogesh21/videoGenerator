import canvas from "canvas";
import fs from "fs";
import path from "path";

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

  if (totalHeight) y = y + (totalHeight / 2 - totalTextHeight/2);

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
  size,
  fontStyle
) {
  const name = Date.now();
  const { width, height } = size;
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

  const registerElementFont = (elementStyle, elementType) => {
    const styleKey = elementStyle || "normal";
    const fontPath = path.join(process.cwd(), "font", fontPack[fontStyle][styleKey]);
    registerFont(fontPath, { family: `${fontStyle}-${styleKey}-${elementType}` });
  };

  // Register fonts for each element if enabled
  // if (hasTitle) {
  //   registerElementFont(fontSettings.title_style, "title");
  // }
  // if (contentText) {
  //   registerElementFont(fontSettings.content_style, "content");
  // }
  // if (hasAuthor) {
  //   registerElementFont(fontSettings.credit_style, "credit");
  // }

  const dir = `./public/images/0`;
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Draw background
  const background = await loadImage(backgroundPath);
  ctx.drawImage(background, 0, 0, width, height);

  // Render Title
  if (hasTitle) {
    ctx.font = `${fontSettings.title_size}px ${fontStyle}-${
      fontSettings.title_style || "normal"
    }-title`;
    ctx.fillStyle = fontSettings.title_color;
    ctx.textAlign = fontSettings.title_align;
    wrapText(
      ctx,
      titleText,
      positions.title.x * 3,
      positions.title.y * 3 + fontSettings.title_size,
      fontSettings.title_width,
      fontSettings.title_size * 1.3
    );
  }

  // Render Content
  if (contentText)
    ctx.font = `${fontSettings.content_size}px ${fontStyle}-${
      fontSettings.content_style || "normal"
    }-content`;
  ctx.fillStyle = fontSettings.content_color;
  ctx.textAlign = fontSettings.content_align;
  wrapText(
    ctx,
    contentText,
    positions.content.x * 3,
    positions.content.y * 3 + fontSettings.content_size,
    fontSettings.content_width,
    fontSettings.content_size * 1.3,
    fontSettings.content_height
  );

  // Render Credit (Author)
  if (hasAuthor) {
    ctx.font = `${fontSettings.credit_size}px ${fontStyle}-${
      fontSettings.credit_style || "normal"
    }-credit`;

    ctx.fillStyle = fontSettings.credit_color;
    ctx.textAlign = fontSettings.credit_align;
    wrapText(
      ctx,
      creditText,
      positions.credit.x * 3,
      positions.credit.y * 3 + fontSettings.credit_size,
      fontSettings.credit_width,
      fontSettings.credit_size * 1.3
    );
  }

  const outputPath = path.join(dir, `${name}.png`);
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(outputPath, buffer);
  createdImage.push(`${name}.png`);

  return createdImage;
}

export default generateImages;
