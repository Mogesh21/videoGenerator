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

async function generateImages(backgroundPath, title, content, author, id, size, single = false) {
  const name = Date.now();
  const width = size.width;
  const height = size.height;
  const titleHeight = title.size + 30;
  const authorHeight = author.size + 30;
  const padding = 80;
  const createdImage = [];

  registerFont(path.join(process.cwd(), "font", "NotoSans-VariableFont_wdth,wght.ttf"), {
    family: "Noto Sans",
  });

  const titleFont = `bold ${title.size}px Noto Sans`;
  const contentFont = `${content.size}px Noto Sans`;
  const authorFont = `italic ${author.size}px Noto Sans`;

  const dir = `./public/images/${id}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  let currentContentIndex = 0;
  let imageCount = 1;

  if (single) {
    const data = typeof content.text === "string" ? content.text.split("\\n") : content.text;

    for (let i = 0; i < data.length; i++) {
      const canvas = createCanvas(width, height);
      const ctx = canvas.getContext("2d");

      const background = await loadImage(backgroundPath);
      ctx.drawImage(background, 0, 0, width, height);

      ctx.font = titleFont;
      ctx.fillStyle = title.color;
      ctx.textAlign = "center";
      ctx.fillText(title.text, width / 2, titleHeight / 2 + padding);

      ctx.font = authorFont;
      ctx.fillStyle = author.color;
      ctx.textAlign = "right";
      ctx.fillText(`- ${author.text}`, width - padding, height - padding);

      ctx.font = contentFont;
      ctx.fillStyle = content.color;
      ctx.textAlign = "left";

      const lineHeight = content.size + 10;
      const contentAreaY = titleHeight + padding * 2;
      let y = contentAreaY;

      const point = data[i];
      y = wrapText(ctx, point, padding, y, width - padding * 2, lineHeight);

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
  } else {
    const data = typeof content.text === "string" ? content.text.split("\\n") : content.text;
    while (currentContentIndex < data.length) {
      const canvas = createCanvas(width, height);
      const ctx = canvas.getContext("2d");

      const background = await loadImage(backgroundPath);
      ctx.drawImage(background, 0, 0, width, height);

      ctx.font = titleFont;
      ctx.fillStyle = title.color;
      ctx.textAlign = "center";
      ctx.fillText(title.text, width / 2, titleHeight / 2 + padding);

      ctx.font = authorFont;
      ctx.fillStyle = author.color;
      ctx.textAlign = "right";
      ctx.fillText(`- ${author.text}`, width - padding, height - padding);

      ctx.font = contentFont;
      ctx.fillStyle = content.color;
      ctx.textAlign = "left";

      const contentAreaY = titleHeight + padding * 2;
      const contentAreaHeight = height - (titleHeight + authorHeight + padding * 7);
      const lineHeight = content.size + 10;
      let y = contentAreaY;

      while (currentContentIndex < data.length) {
        const point = data[currentContentIndex];
        const testY = y + lineHeight;

        if (testY > contentAreaY + contentAreaHeight) {
          break;
        }

        y = wrapText(ctx, point, padding, y, width - padding * 2, lineHeight);
        y += padding / 3;
        currentContentIndex++;
      }

      const outputPath = path.join(
        process.cwd(),
        "public",
        "images",
        id.toString(),
        `${name}_${imageCount}.png`
      );
      const buffer = canvas.toBuffer("image/png");
      fs.writeFileSync(outputPath, buffer);
      createdImage.push(`${name}_${imageCount}.png`);

      imageCount++;
    }
  }

  console.log("All images generated successfully!");
  return createdImage;
}

export default generateImages;
