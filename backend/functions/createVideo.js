import ffmpeg from "fluent-ffmpeg";
import path from "path";
import fs from "fs";
import { loadFont } from "./createThumbnail.js";
import { percentage } from "../routes/videos.js";

const formatPath = (filePath) => {
  return filePath.replace(/\\/g, "/");
};

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
      .replace(/'/g, '\\"')
      .replace(/%/g, "\\%")
      .replace(/\n/g, "\\n")
  );
}

function timeToSeconds(time) {
  if (time) {
    const [h, m, s] = time.split(":").map(parseFloat);
    return h * 3600 + m * 60 + s;
  }
  return 0;
}

const createVideo = async ({
  content,
  thumbnailPath,
  files,
  hasIntro,
  hasOutro,
  outputPath,
  fontSettings,
  positions,
  size,
  duration,
  reqId,
}) => {
  let intro, outro;
  const fontPath = formatPath(path.join(process.cwd(), "font", `${fontSettings.style}.ttf`));
  const bgVideo = formatPath(files.background_video);
  const audio = formatPath(files.audio);
  const thumbnail = formatPath(thumbnailPath);
  const output = formatPath(outputPath);
  if (hasIntro) intro = formatPath(files.intro_video);
  if (hasOutro) outro = formatPath(files.outro_video);
  const openFont = await loadFont(path.join(process.cwd(), "font", `${fontSettings.style}.ttf`));

  const fgImage = content.images.map((img) => formatPath(img));
  const font = fontPath.replace(/:/g, "\\:");
  const question = escapedText(content.text);
  const options = escapedText(content.options);
  const answer = escapedText([content.answer])[0];
  const videoWidth = parseInt(size.width);
  const videoHeight = parseInt(size.height);
  let inputLength = 2;
  const command = ffmpeg();

  let filterComplex = `[0:v]scale=${videoWidth}:${videoHeight},format=rgba,trim=duration=1,setpts=PTS-STARTPTS[thumbnail];`;
  command.input(thumbnail);

  if (hasIntro) {
    filterComplex += `[1:v]scale=${videoWidth}:${videoHeight},trim=duration=${duration.intro},setpts=PTS-STARTPTS[intro];\n[2:v]scale=${videoWidth}:${videoHeight},trim=duration=${duration.total},setpts=PTS-STARTPTS[bg];\n`;
    inputLength = inputLength + 1;
    command.input(intro);
  } else {
    filterComplex += `[1:v]scale=${videoWidth}:${videoHeight},trim=duration=${duration.total},setpts=PTS-STARTPTS[bg];\n`;
  }

  command.input(bgVideo);

  //question
  let lastLabel = "bg";
  let currentY = positions.question.y;

  if (question.length > 0) {
    if (fontSettings.question.bg) {
      filterComplex += `[${lastLabel}]drawbox=x=${
        positions.question.x - fontSettings.question.size
      }:y=${currentY - fontSettings.question.size}:w=${
        fontSettings.question.width + fontSettings.question.size
      }:h=${fontSettings.question.size * (question.length + 2)}:color=${
        fontSettings.question.bgColor
      }:t=fill[question_box];`;

      lastLabel = "question_box";
    }

    for (let i = 0; i < question.length; i++) {
      const testWidth = openFont.getAdvanceWidth(question[i], fontSettings.question.size);
      const xVal =
        fontSettings.question.align === "center"
          ? positions.question.x + fontSettings.question.width / 2 - testWidth / 2
          : fontSettings.question.align === "right"
          ? positions.question.x + fontSettings.question.width - testWidth
          : positions.question.x;
      const animation = getAnimationFilter(
        fontSettings.question.animation,
        xVal,
        currentY,
        fontSettings.question.size,
        duration.total
      );
      const inputLabel = i === 0 ? lastLabel : `text${i}`;
      const outputLabel = i === question.length - 1 ? "bgtext" : `text${i + 1}`;
      filterComplex += `[${inputLabel}]drawtext=text='${question[i]}':fontfile='${font}':fontsize=${fontSettings.question.size}:x=${xVal}:y=${currentY}:fontcolor=${fontSettings.question.color}:${animation}[${outputLabel}];\n`;
      lastLabel = outputLabel;
      // currentY += fontSettings.question.size + fontSettings.question.lineHeight;
      currentY += fontSettings.question.lineHeight;
    }
  }

  //option
  const optionY = content.optionPosition;
  let ans = 0;
  let current = 0;
  if (options.length > 0) {
    for (let i = 0; i < options.length; i++) {
      const testWidth = openFont.getAdvanceWidth(options[i], fontSettings.options.size);
      const xVal =
        fontSettings.options.align === "center"
          ? positions.options.x + fontSettings.options.width / 2 - testWidth / 2
          : align === "right"
          ? positions.options.x + fontSettings.options.width - testWidth
          : positions.options.x;
      const animation = getAnimationFilter(
        fontSettings.options.animation,
        xVal,
        optionY[i],
        fontSettings.options.size,
        duration.total
      );

      if (
        content.optionLength[current] - content.optionLength[0] === i &&
        fontSettings.options.bg
      ) {
        const height =
          current > 0
            ? fontSettings.options.size *
              (content.optionLength[current] - content.optionLength[current - 1] + 1)
            : fontSettings.options.size * (content.optionLength[current] + 1);

        filterComplex += `[${lastLabel}]drawbox=x=${
          positions.options.x - fontSettings.options.size
        }:y=${optionY[i] - fontSettings.options.size / 2}:w=${
          fontSettings.options.width + fontSettings.options.size * 2
        }:h=${height - 20}:color=${fontSettings.options.bgColor}:t=fill[option_box${i}];`;

        lastLabel = `option_box${i}`;
        current += 1;
      }

      const inputLabel = lastLabel;
      const outputLabel = `text${i + 1 + question.length + ans}`;

      if (answer.includes(options[i].trim())) {
        const outputLabel2 = `text${parseInt(i + 1 + question.length) + parseInt(ans) + 1}`;
        filterComplex += `[${inputLabel}]drawtext=text='${
          options[i]
        }':fontfile='${font}':fontsize=${fontSettings.options.size}:x=${xVal}:y=${
          optionY[i]
        }:fontcolor=${fontSettings.options.color}:enable='lte(t,${
          duration.timer + 0.3
        })':${animation}[${outputLabel}];\n`;
        //ans highlight
        filterComplex += `[${outputLabel}]drawtext=text='${
          options[i]
        }':fontfile='${font}':fontsize=${fontSettings.options.size}:x=${xVal}:y=${
          optionY[i]
        }:fontcolor=${fontSettings.options.answerColor}:enable='gte(t,${
          duration.timer + 0.3
        })':${animation}[${outputLabel2}];\n`;
        ans += 1;
        lastLabel = outputLabel2;
      } else {
        filterComplex += `[${inputLabel}]drawtext=text='${options[i]}':fontfile='${font}':fontsize=${fontSettings.options.size}:x=${xVal}:y=${optionY[i]}:fontcolor=${fontSettings.options.color}:${animation}[${outputLabel}];\n`;
        lastLabel = outputLabel;
      }
    }
  }

  command.input(audio);
  //images
  if (fgImage.length > 0) {
    let overLayComplex = "";
    inputLength += fgImage.length;
    for (let i = 0; i < fgImage.length; i++) {
      const xVal = positions.images.x;
      // fontSettings.question.align === "center"
      //   ? positions.question.x + fontSettings.question.width / 2 - fontSettings.image.width / 2
      //   : fontSettings.question.align === "right"
      //   ? positions.question.x + fontSettings.question.width - fontSettings.image.width
      //   : positions.question.x;

      const inputLabel1 = `[${i + inputLength}:v]`;
      const outputLabel1 = `img${i + 1}`;

      const inputLabel2 = i === 0 ? `[${lastLabel}][img${i + 1}]` : `[${lastLabel}]`;
      const outputLabel2 = `fg${i + 1}`;

      filterComplex += `${inputLabel1}scale=${fontSettings.image.width}:${fontSettings.image.height}[${outputLabel1}];`;

      overLayComplex += `${inputLabel2}overlay=${xVal}:${positions.images.y}[${outputLabel2}];`;
      currentY += fontSettings.image.height + fontSettings.question.lineHeight;
      lastLabel = outputLabel2;
      command.input(fgImage[i]);
    }
    filterComplex += overLayComplex;
  }

  filterComplex += `[${lastLabel}]drawtext=text='www.interviewbix.com':fontfile='${font}':fontsize=50:x=330:y=1870:fontcolor=${fontSettings.question.color}[watermark];`;

  lastLabel = "watermark";

  if (hasOutro) {
    filterComplex += `[${inputLength + 1}:v]scale=${videoWidth}:${videoHeight},trim=duration=${
      duration.outro
    },setpts=PTS-STARTPTS[outro];`;
    filterComplex += `[thumbnail]${hasIntro ? "[intro]" : ""}[${lastLabel}][outro]concat=n=${
      hasIntro ? 4 : 3
    }:v=1:a=0[outv]`;
    command.input(outro);
  } else {
    filterComplex += `[thumbnail]${hasIntro ? "[intro]" : ""}[${lastLabel}]concat=n=${
      hasIntro ? 3 : 2
    }:v=1:a=0[outv]`;
  }

  return new Promise((resolve, reject) => {
    command
      .complexFilter(filterComplex, "outv")
      .outputOptions(`-map ${inputLength - fgImage.length}:a`)
      .audioCodec("aac")
      .videoCodec("libx264")
      .outputOptions("-movflags faststart")
      .outputOptions("-pix_fmt yuv420p")
      .outputOptions("-shortest")
      .save(output)
      .on("start", (commandLine) => console.log("FFmpeg command:", commandLine))
      .on("progress", (progress) => {
        const processed = timeToSeconds(progress.timemark) || 0;
        const percent = ((processed / (duration.total + 10)) * 100).toFixed(2);
        if (parseInt(percent)) {
          percentage[reqId] = percent;
        }
      })
      .on("stderr", (stderrLine) => console.log("🔍 FFmpeg Debug:", stderrLine))
      .on("end", () => {
        fs.rmdirSync(path.join(process.cwd(), "public", "images"), { recursive: true });
        console.log("Processing finished successfully");
        resolve(output);
      })
      .on("error", (err) => {
        err.name = "Video Error";
        console.error("Error:", err);
        reject(err);
      });
  });
};

export default createVideo;
