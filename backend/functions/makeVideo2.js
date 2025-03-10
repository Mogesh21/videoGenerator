import canvas from "canvas";
import { JSDOM } from "jsdom";
import fs from "fs";

const { createCanvas, registerFont } = canvas;

const wrapText = (ctx, text, x, y, maxWidth, lineHeight, totalHeight = 0) => {
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
};

const makeVideo = async (
  fileData,
  projectId,
  project_name,
  positions,
  fontSettings,
  hasTitle,
  hasAuthor,
  type,
  size
) => {
  try {
    const { width, height } = size;
    const videoUrl = fileData[0].videoUrl || "http://localhost:8080/bgvideos/bgvideo.mp4";
    const audioUrl = fileData[0].audioUrl;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");
    const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
    const document = dom.window.document;
    const video = document.createElement("video");

    const fontPath = path.join(process.cwd(), "font", `${fontSettings.title_font}.ttf`);
    const fontPath2 = path.join(process.cwd(), "font", `${fontSettings.content_font}.ttf`);
    const fontPath3 = path.join(process.cwd(), "font", `${fontSettings.credit_font}.ttf`);

    if (fontSettings.title_font && fontSettings.title_font !== "Sans Serif")
      registerFont(fontPath, { family: fontSettings.title_font });
    if (fontSettings.content_font && fontSettings.content_font !== "Sans Serif")
      registerFont(fontPath2, { family: fontSettings.content_font });
    if (fontSettings.credit_font && fontSettings.credit_font !== "Sans Serif")
      registerFont(fontPath3, { family: fontSettings.credit_font });

    video.src = videoUrl;
    video.muted = true;
    video.loop = true;

    video.onloadedmetadata = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const totalDuration =
        fileData[fileData.length - 1]?.startTime + fileData[fileData.length - 1]?.duration;

      const stream = canvas.captureStream(30);
      const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/mp4" });
      const chunks = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const blob = new Blob(chunks, { type: "video/mp4" });

        const writePath = path.join(process.cwd(), "public", "videos", projectId.toString());
        fs.mkdirSync(writePath, {
          recursive: true,
        });
        fs.writeFileSync("/backend/public/videos/");

        // try {
        //   const response = await fetch('/upload-video', {
        //     method: 'POST',
        //     body: formData
        //   });
        //   const data = await response.json();
        //   console.log('Video saved on server:', data);
        // } catch (error) {
        //   console.error('Error uploading video:', error);
        // }
      };

      mediaRecorder.start();

      video.play();
      let startTime = Date.now();
      let currentText = "";
      let opacity = 0;
      let fadeDirection = 1;

      const drawFrame = () => {
        const elapsedTime = (Date.now() - startTime) / 1000;

        if (elapsedTime >= totalDuration) {
          mediaRecorder.stop();
          console.log("Processing complete. Stopping...");
          return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

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

        let newText = "";
        for (let entry of fileData) {
          if (elapsedTime >= entry.startTime && elapsedTime < entry.startTime + entry.duration) {
            newText = entry.content;
            break;
          }
        }

        if (newText !== currentText) {
          fadeDirection = -1;
        } else if (opacity < 1 && fadeDirection === 1) {
          opacity += 0.02;
        }
        if (opacity <= 0) {
          currentText = newText;
          fadeDirection = 1;
        }

        if (currentText) {
          ctx.globalAlpha = opacity;
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
          ctx.globalAlpha = 1;
        }

        opacity = Math.max(0, Math.min(1, opacity + fadeDirection * 0.02));

        requestAnimationFrame(drawFrame);
      };

      drawFrame();
    };
  } catch (error) {
    console.log(error);
  }
};

export default makeVideo;
