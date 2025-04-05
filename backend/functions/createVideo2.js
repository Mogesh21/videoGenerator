import ffmpeg from "fluent-ffmpeg";
import fs from "fs";
import path from "path";
import axios from "axios";

// Utility function to format paths correctly
const formatPath = (filePath) => {
  return filePath.replace(/\\/g, "/");
};

// Ensure a file exists
const verifyFileExists = (filePath, name) => {
  if (!fs.existsSync(filePath)) {
    throw new Error(`${name} not found at: ${filePath}`);
  }
};

// Download audio from URL
async function downloadAudio(audioUrl) {
  try {
    const response = await axios.get(audioUrl, { responseType: "arraybuffer" });
    const tempDir = path.join(process.cwd(), "public", "temp");

    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    const audioPath = path.join(tempDir, "audio.mp3");
    fs.writeFileSync(audioPath, response.data);
    return formatPath(audioPath);
  } catch (error) {
    console.error("Error downloading audio:", error);
    throw error;
  }
}

const animationEffects = {
  fade: (duration, content, x, y, size, totalDuration = 10) =>
    `alpha='if(lt(t,${duration}),t/${duration},if(lt(t,${
      totalDuration - duration
    }),1,((${totalDuration}-t)/${duration})))'`,

  slideLeft: (duration, content, x, y, size) =>
    `x='if(lt(t,${duration}),-text_w+(t/${duration})*(${x}+text_w),${x})'`,

  slideRight: (duration, content, x, y, size) =>
    `x='if(lt(t,${duration}),main_w-(t/${duration})*(main_w-${x}),${x})'`,

  slideUp: (duration, content, x, y, size) =>
    `y='if(lt(t,${duration}),main_h+(t/${duration})*(-main_h+${y}),${y})'`,

  slideDown: (duration, content, x, y, size) =>
    `y='if(lt(t,${duration}),-text_h+(t/${duration})*(${y}+text_h),${y})'`,

  scale: (duration, content, x, y, size) =>
    `fontsize='if(lt(t,${duration}),0+(t/${duration})*(${size}-0),${size})'`,

  scaleImage: (duration, content, x, y, size) =>
    `'if(lt(t,${duration}),0+(t/${duration})*(${size}-0),${size})'`,

  shake: (duration, content, x, y, size) => `x='${x}+5*cos(15*t)':y='${y}+5*sin(20*t)'`,

  horizontalShake: (duration, content, x, y, size) => `x='${x}+5*cos(20*t)':y='${y}+5*sin(0*t)'`,

  verticalShake: (duration, content, x, y, size) => `x='${x}+5*cos(0*t)':y='${y}+5*sin(20*t)'`,

  blink: () => `alpha='if(lt(mod(t,2),1),1,0)'`,

  bounce: (duration, content, x, y, size) => `y='${y}-10*sin(t*(${Math.PI}/${duration / 4}))'`,
};

function getAnimationFilter(effect, duration, contentText, x, y, size) {
  return animationEffects[effect]
    ? animationEffects[effect](duration, contentText, x, y, size)
    : "";
}

function generateDrawTextFilters(
  text,
  fontSize,
  x,
  y,
  maxWidth,
  font,
  color = "white",
  animation = "",
  lineheight = 10,
  start = 0
) {
  const words = text.split(" ");
  let lines = [];
  let currentLine = "";
  let testLine = "";
  const approxCharWidth = fontSize * 0.6;

  words.forEach((word) => {
    testLine = currentLine.length ? `${currentLine} ${word}` : word;
    if (testLine.length * approxCharWidth > maxWidth) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  });
  if (currentLine) lines.push(currentLine);

  const length = lines.length;
  return {
    lines: lines
      .map(
        (line, index) =>
          `[video${
            index + start
          }]drawtext=text='${line}':fontfile='${font}':fontsize=${fontSize}:x=${x}:y=${
            y + index * (fontSize + lineheight)
          }:fontcolor=${color}:${animation}[video${index + start + 1}]`
      )
      .join(";"),
    length: length,
  };
}

// Main video creation function
async function createVideoWithAnimations({
  backgroundVideo,
  audioFile,
  foregroundImage,
  titleText,
  contentText,
  outputVideo,
  fontPath,
  videoWidth = 1080,
  videoHeight = 1920,
  imageWidth = 300,
  imageHeight = 300,
  imageOffsetX = 20,
  imageOffsetY = 20,
  animationDuration = 2,
  duration = 10,
  introPath,
}) {
  // Format paths
  const bgVideo = formatPath(backgroundVideo);
  const fgImage = formatPath(foregroundImage);
  const audio = formatPath(audioFile);
  const output = formatPath(outputVideo);
  const intro = formatPath(introPath);
  const font = fontPath.replace(/:/g, "\\:");
  const title = {
    x: 150,
    size: 100,
    y: 50,
  };

  const content = {
    x: 100,
    size: 50,
    y: 150,
  };
  const image = {
    width: 300,
    height: 300,
    x: 500,
    y: 300,
  };

  // Ensure files exist
  verifyFileExists(bgVideo, "Background video");
  verifyFileExists(fgImage, "Foreground image");
  verifyFileExists(audio, "Audio file");
  verifyFileExists(fontPath, "Font file");
  verifyFileExists(intro, "Intro file");

  const titleAnimation = getAnimationFilter(
    "bounce",
    animationDuration,
    titleText,
    title.x,
    title.y,
    title.size
  );

  const contentAnimation = getAnimationFilter(
    "blink",
    animationDuration,
    contentText,
    content.x,
    content.y,
    content.size
  );
  const imageAnimation = getAnimationFilter(
    "",
    animationDuration,
    contentText,
    image.x,
    image.y,
    image.width
  );

  //image code
  // [bg][fg]overlay=main_w-overlay_w-20:main_h-overlay_h-20:enable='between(t,0,${
  //   duration / 2
  // })'[video];

  // const title =

  //countdown
  //[video][fgCd]overlay=${imageAnimation ? imageAnimation : image.x + 400 + ":" + image.y}:enable='between(t,0,${duration})'[video_with_cd];

  const filterComplex = `
  [0:v]scale=${videoWidth}:${videoHeight},trim=duration=${duration}[bg];
  [1:v]scale=${image.width}:${image.height}[fg];

  [bg][fg]overlay=${
    imageAnimation ? imageAnimation : `${image.x}:${image.y}`
  }:enable='between(t,0,${duration})'[video];

  [video]drawtext=text='${titleText}':fontfile='${font}':fontsize=${title.size}:x=${title.x}:y=${
    title.y
  }:fontcolor=red:enable='lt(t,${duration / 2})':${titleAnimation}[video1];

  [video1]drawtext=text='${titleText}':fontfile='${font}':fontsize=${title.size}:x=${title.x}:y=${
    title.y
  }:fontcolor=green:enable='gte(t,${duration / 2})':${titleAnimation}[video2];

  [video2]drawtext=text='${contentText}':fontfile='${font}':fontsize=${content.size}:x=${
    content.x
  }:y=${content.y}:fontcolor=yellow:${contentAnimation}[out]
`;

  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(bgVideo)
      .input(fgImage)
      // .input(countDown)
      .input(audio)
      .complexFilter(filterComplex, "out")
      .outputOptions("-map 2:a")
      .audioCodec("aac")
      .videoCodec("libx264")
      .outputOptions("-movflags faststart")
      .outputOptions("-pix_fmt yuv420p")
      .outputOptions("-shortest")
      .save(output)
      .on("start", (commandLine) => console.log("FFmpeg command:", commandLine))
      .on("progress", (progress) => console.log("Processing:", progress.percent, "%"))
      .on("stderr", (stderrLine) => console.log("🔍 FFmpeg Debug:", stderrLine))
      .on("end", () => {
        console.log("Processing finished successfully");
        resolve(output);
      })
      .on("error", (err) => {
        console.error("Error:", err);
        reject(err);
      });
  });
}

// Main function to generate video
async function generateAnimatedVideo({
  backgroundVideoPath,
  audioUrl,
  imagePath,
  title,
  content,
  outputPath,
  introPath,
}) {
  try {
    const audioPath = audioUrl.startsWith("http")
      ? await downloadAudio(audioUrl)
      : formatPath(audioUrl);

    const fontPath = "E:/Mogesh/Projects/interviewbix_videos/backend/font/SuperShiny.ttf";

    const result = await createVideoWithAnimations({
      backgroundVideo: backgroundVideoPath,
      audioFile: audioPath,
      foregroundImage: imagePath,
      titleText: title,
      contentText: content,
      outputVideo: outputPath,
      fontPath,
      duration: 10,
      introPath,
    });

    return result;
  } catch (error) {
    console.error("Error in video generation:", error);
    throw error;
  }
}

// Example usage
(async () => {
  try {
    const backgroundPath =
      "E:/Mogesh/Projects/interviewbix_videos/backend/functions/public/temp/bg.mp4";
    const imagePath = "E:/Mogesh/Projects/interviewbix_videos/backend/functions/public/temp/bg.jpg";
    const introPath =
      "E:/Mogesh/Projects/interviewbix_videos/backend/functions/public/temp/intro.mp4";
    const audioPath =
      "E:/Mogesh/Projects/interviewbix_videos/backend/functions/public/temp/audio.mp3";
    const outputPath = "E:/Mogesh/Projects/interviewbix_videos/backend/functions/public/output.mp4";

    await generateAnimatedVideo({
      backgroundVideoPath: backgroundPath,
      audioUrl: audioPath,
      imagePath: imagePath,
      title: "Welcome to Our Video",
      content: "This is an example of animated text and images",
      outputPath: outputPath,
      introPath: introPath,
    });

    console.log("✅ Video creation process completed");
  } catch (error) {
    console.error("❌ Failed to create video:", error);
    process.exit(1);
  }
})();
