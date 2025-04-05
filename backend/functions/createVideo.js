import ffmpeg from "fluent-ffmpeg";
import path from "path";
import fs from "fs";
import { createCanvas } from "canvas";
import { loadFont } from "./createThumbnail.js";

const formatPath = (filePath) => {
  return filePath.replace(/\\/g, "/");
};

const verifyFileExists = (filePath, name) => {
  if (!fs.existsSync(filePath)) {
    throw new Error(`${name} not found at: ${filePath}`);
  }
};

function generateFFmpegWrappedDrawTextFilters(
  ctx,
  font,
  linesArray,
  x,
  y,
  maxWidth,
  lineHeight,
  fontOptions,
  startLabel = "bg",
  finalLabel = "bgtext"
) {
  let lastLabel = startLabel;
  const filters = [];
  let globalLineIndex = 0;

  for (let i = 0; i < linesArray.length; i++) {
    const text = linesArray[i];
    const words = text.split(" ");
    let line = "";
    let wrappedLines = [];

    // Wrap the current line
    for (const word of words) {
      const testLine = line + word + " ";
      const testWidth = font.getAdvanceWidth(testLine, lineHeight);
      if (testWidth > maxWidth && line !== "") {
        wrappedLines.push(line.trim());
        line = word + " ";
      } else {
        line = testLine;
      }
    }
    if (line.trim()) wrappedLines.push(line.trim());

    // Add drawtext filters for wrapped lines
    for (let j = 0; j < wrappedLines.length; j++) {
      const currentLine = escapeFFmpegText(wrappedLines[j]);
      const inputLabel = lastLabel;
      const isLastLine = i === linesArray.length - 1 && j === wrappedLines.length - 1;
      const outputLabel = isLastLine ? finalLabel : `text${globalLineIndex + 1}`;

      filters.push(
        `[${inputLabel}]drawtext=text='${currentLine}':fontfile='${fontOptions.path}':fontsize=${
          fontOptions.size
        }:x=${x}:y=${y + globalLineIndex * lineHeight}:fontcolor=${
          fontOptions.color
        }[${outputLabel}]`
      );

      lastLabel = outputLabel;
      globalLineIndex++;
    }
  }

  return filters;
}

const animationEffects = {
  fade: (x, y, size, totalDuration = 10) =>
    `alpha='if(lt(t,2),t/2,if(lt(t,${totalDuration - 2}),1,((${totalDuration}-t)/2)))'`,

  slideLeft: (x, y, size) => `x='if(lt(t,2),-text_w+(t/2)*(${x}+text_w),${x})'`,

  slideRight: (x, y, size) => `x='if(lt(t,2),main_w-(t/2)*(main_w-${x}),${x})'`,

  slideUp: (x, y, size) => `y='if(lt(t,2),main_h+(t/2)*(-main_h+${y}),${y})'`,

  slideDown: (x, y, size) => `y='if(lt(t,2),-text_h+(t/2)*(${y}+text_h),${y})'`,

  scale: (x, y, size) => `fontsize='if(lt(t,2),0+(t/2)*(${size}-0),${size})'`,

  scaleImage: (x, y, size) => `'if(lt(t,2),0+(t/2)*(${size}-0),${size})'`,

  shake: (x, y, size) => `x='${x}+5*cos(15*t)':y='${y}+5*sin(20*t)'`,

  horizontalShake: (x, y, size) => `x='${x}+5*cos(20*t)':y='${y}+5*sin(0*t)'`,

  verticalShake: (x, y, size) => `x='${x}+5*cos(0*t)':y='${y}+5*sin(20*t)'`,

  blink: () => `alpha='if(lt(mod(t,2),1),1,0)'`,

  bounce: (x, y, size) => `y='${y}-10*sin(t*(${Math.PI}/0.5))'`,
};

function getAnimationFilter(effect, x, y, size, totalDuration) {
  return animationEffects[effect] ? animationEffects[effect](x, y, size, totalDuration) : "";
}

function escapedText(question) {
  return question.map((text) =>
    text
      .replace(/\\/g, "\\\\\\\\")
      .replace(/:/g, "\\:")
      .replace(/'/g, "\\'")
      .replace(/%/g, "\\%")
      .replace(/\n/g, "\\n")
  );
}

const createVideo = async ({
  content,
  thumbnailPath,
  introPath,
  backgroundVideoPath,
  audioUrl,
  outputPath,
  fontSettings,
  positions,
  size,
  duration,
  timerDuration,
}) => {
  const fontPath = formatPath(path.join(process.cwd(), "font", `${fontSettings.style}.ttf`));
  const bgVideo = formatPath(backgroundVideoPath);
  const audio = formatPath(audioUrl);
  const thumbnail = formatPath(thumbnailPath);
  const output = formatPath(outputPath);
  const intro = formatPath(introPath);
  const openFont = await loadFont(path.join(process.cwd(), "font", `${fontSettings.style}.ttf`));

  const fgImage = content.images.map((img) => formatPath(img));
  const font = fontPath.replace(/:/g, "\\:");
  const question = escapedText(content.text);
  const options = content.options;
  const answer = content.answer;
  const videoWidth = parseInt(size.width);
  const videoHeight = parseInt(size.height);
  let inputLength = 3;
  const command = ffmpeg();

  let filterComplex = `[0:v]scale=${videoWidth}:${videoHeight},format=rgba,trim=duration=1,setpts=PTS-STARTPTS[thumbnail];
            [1:v]scale=${videoWidth}:${videoHeight},trim=duration=5,setpts=PTS-STARTPTS[intro];
            [2:v]scale=${videoWidth}:${videoHeight},trim=duration=${duration},setpts=PTS-STARTPTS[bg];\n`;

  command.input(thumbnail);
  command.input(intro);
  command.input(bgVideo);

  //question
  let lastLabel = "bg";
  let currentY = positions.content.y;
  if (question.length > 0) {
    for (let i = 0; i < question.length; i++) {
      const testWidth = openFont.getAdvanceWidth(question[i], fontSettings.content.size);
      const xVal =
        fontSettings.content.align === "center"
          ? positions.content.x + fontSettings.content.width / 2 - testWidth / 2
          : align === "right"
          ? positions.content.x + fontSettings.content.width - testWidth
          : positions.content.x;
      const animation = getAnimationFilter(
        fontSettings.content.animation,
        xVal,
        currentY,
        fontSettings.content.size,
        duration
      );
      const inputLabel = i === 0 ? lastLabel : `text${i}`;
      const outputLabel = i === question.length - 1 ? "bgtext" : `text${i + 1}`;
      filterComplex += `[${inputLabel}]drawtext=text='${question[i]}':fontfile='${font}':fontsize=${fontSettings.content.size}:x=${xVal}:y=${currentY}:fontcolor=${fontSettings.content.color}:${animation}[${outputLabel}];\n`;
      lastLabel = outputLabel;
      currentY += fontSettings.content.size + fontSettings.content.lineHeight;
    }
  }

  //option
  const optionY = content.optionPosition;
  let ans = 0;
  if (options.length > 0) {
    for (let i = 0; i < options.length; i++) {
      const testWidth = openFont.getAdvanceWidth(options[i], fontSettings.options.size);
      const xVal =
        fontSettings.options.align === "center"
          ? positions.options[0].x + fontSettings.options.width / 2 - testWidth / 2
          : align === "right"
          ? positions.options[0].x + fontSettings.options.width - testWidth
          : positions.options[0].x;
      const animation = getAnimationFilter(
        fontSettings.options.animation,
        xVal,
        optionY[i],
        fontSettings.options.size,
        duration
      );
      const inputLabel = i === 0 ? lastLabel : `text${i + question.length + ans}`;
      const outputLabel = `text${i + 1 + question.length + ans}`;

      if (answer.includes(options[i].trim())) {
        const outputLabel = `text${parseInt(i + 1 + question.length) + parseInt(ans) + 1}`;
        filterComplex += `[${inputLabel}]drawtext=text='${options[i]}':fontfile='${font}':fontsize=${fontSettings.options.size}:x=${xVal}:y=${optionY[i]}:fontcolor=${fontSettings.options.color}:enable='lte(t,${timerDuration})':${animation}[${outputLabel}];\n`;

        filterComplex += `[${outputLabel}]drawtext=text='${options[i]}':fontfile='${font}':fontsize=${fontSettings.options.size}:x=${xVal}:y=${optionY[i]}:fontcolor=${fontSettings.options.answerColor}:enable='gte(t,${timerDuration})':${animation}[${outputLabel}];\n`;
        ans += 1;
        lastLabel = outputLabel;
      } else {
        filterComplex += `[${inputLabel}]drawtext=text='${options[i]}':fontfile='${font}':fontsize=${fontSettings.options.size}:x=${xVal}:y=${optionY[i]}:fontcolor=${fontSettings.options.color}:${animation}[${outputLabel}];\n`;
        lastLabel = outputLabel;
      }
    }
  }

  //images
  let imgIndex = 0;
  if (fgImage.length > 0) {
    let overLayComplex = "";
    inputLength += fgImage.length;
    for (let i = 0; i < fgImage.length; i++) {
      const xVal =
        fontSettings.content.align === "center"
          ? positions.content.x + fontSettings.content.width / 2 - fontSettings.image.width / 2
          : align === "right"
          ? positions.content.x + fontSettings.content.width - fontSettings.image.width
          : positions.content.x;

      const inputLabel1 = `[${i + 3}:v]`;
      const outputLabel1 = `img${i + 1}`;

      const inputLabel2 = i === 0 ? `[${lastLabel}][img${i + 1}]` : `[${lastLabel}]`;
      const outputLabel2 = `fg${i + 1}`;

      filterComplex += `${inputLabel1}scale=${fontSettings.image.width}:${fontSettings.image.height}[${outputLabel1}];`;

      overLayComplex += `${inputLabel2}overlay=${xVal}:${
        currentY + fontSettings.content.lineHeight
      }[${outputLabel2}];`;
      imgIndex = i + 1;
      currentY += fontSettings.image.height + fontSettings.content.lineHeight;
      lastLabel = outputLabel2;
      command.input(fgImage[i]);
    }
    filterComplex += overLayComplex;
  }

  filterComplex += `[thumbnail][intro][${lastLabel}]concat=n=3:v=1:a=0[out]`;

  return new Promise((resolve, reject) => {
    command
      .input(audio)
      .complexFilter(filterComplex, "out")
      .outputOptions(`-map ${inputLength}:a`)
      .audioCodec("aac")
      .videoCodec("libx264")
      .outputOptions("-movflags faststart")
      .outputOptions("-pix_fmt yuv420p")
      .outputOptions("-shortest")
      .save(output)
      .on("start", (commandLine) => console.log("FFmpeg command:", commandLine))
      // .on("progress", (progress) => console.log("Processing:", progress, "%"))
      // .on("stderr", (stderrLine) => console.log("🔍 FFmpeg Debug:", stderrLine))
      .on("end", () => {
        console.log("Processing finished successfully");
        resolve(output);
      })
      .on("error", (err) => {
        console.error("Error:", err);
        reject(err);
      });
  });
};

export default createVideo;

// {
//     style: 'SuperShiny',
//     content: {
//       size: 48,
//       color: 'green',
//       align: 'center',
//       width: 800,
//       lineHeight: 10,
//       italic: 0,
//       bold: 1
//     },
//     options: {
//       size: 40,
//       color: 'orange',
//       align: 'center',
//       width: 880,
//       lineHeight: 10,
//       italic: 1,
//       bold: 0
//     },
//     image: { width: 400, height: 400 }
//   } {
//     content: { x: 140, y: 400 },
//     options: [
//       { x: 100, y: 1100 },
//       { x: 100, y: 1200 },
//       { x: 100, y: 1300 },
//       { x: 100, y: 1400 }
//     ]
//   } {width: 1080, height: 1920}
