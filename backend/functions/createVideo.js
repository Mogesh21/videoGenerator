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
  fade: (duration) => `alpha='if(lt(t,${duration}),t/${duration},1)'`,

  slideLeft: (duration) => `x='if(lt(t,${duration}),-text_w+(t/${duration})*(50+text_w),50)'`,

  slideRight: (duration) => `x='if(lt(t,${duration}),main_w-(t/${duration})*(main_w-50),50)'`,

  slideUp: (duration) => `y='if(lt(t,${duration}),main_h+(t/${duration})*(-main_h+120),120)'`,

  slideDown: (duration) => `y='if(lt(t,${duration}),-text_h+(t/${duration})*(120+text_h),120)'`,

  scale: (duration) => `fontsize='if(lt(t,${duration}),20+(t/${duration})*(48-20),48)'`,

  rotate: (duration) => `rotate='if(lt(t,${duration}),(t/${duration})*3.1416/4,3.1416/4)'`,

  shake: () => `x='50+10*sin(5*t)':y='120+10*sin(7*t)'`,

  blink: () => `alpha='if(lt(mod(t,2),1),1,0)'`,

  bounce: (duration) => `y='120-10*sin(t*(${Math.PI}/${duration}))'`,

  // typewriter: (duration, content) => `text='${content}':enable='lt(n,(${duration}*25))'`,
};

function getAnimationFilter(effect, duration, contentText) {
  return animationEffects[effect] ? animationEffects[effect](duration, contentText) : "";
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
  videoWidth = 1280,
  videoHeight = 720,
  imageWidth = 300,
  imageHeight = 300,
  imageOffsetX = 20,
  imageOffsetY = 20,
  animationDuration = 2,
  duration = 10,
}) {
  // Format paths
  const bgVideo = formatPath(backgroundVideo);
  const fgImage = formatPath(foregroundImage);
  const audio = formatPath(audioFile);
  const output = formatPath(outputVideo);
  const font = fontPath.replace(/:/g, "\\:");

  // Ensure files exist
  verifyFileExists(bgVideo, "Background video");
  verifyFileExists(fgImage, "Foreground image");
  verifyFileExists(audio, "Audio file");
  verifyFileExists(fontPath, "Font file");

  const titleAnimation = getAnimationFilter("shake", animationDuration, titleText);
  const contentAnimation = getAnimationFilter("rotate", animationDuration, contentText);

  const filterComplex = `
[0:v]scale=1280:720,trim=duration=${duration}[bg];
[1:v]scale=300:300[fg];
[bg][fg]overlay=main_w-overlay_w-20:main_h-overlay_h-20:enable='between(t,0,${duration})'[video];
[video]drawtext=text='${titleText}':fontfile='${font}':fontsize=48:x=50:y=50:fontcolor=white:${titleAnimation}[video1];
[video1]drawtext=text='${contentText}':fontfile='${font}':fontsize=30:x=50:y=120:fontcolor=white:${contentAnimation}[out]
  `;

  // Construct filter complex
  //   const filterComplex = `
  // [0:v]scale=${videoWidth}:${videoHeight},trim=duration=${duration}[bg];
  // [1:v]scale=${imageWidth}:${imageHeight}[fg];
  // [bg][fg]overlay=main_w-overlay_w-${imageOffsetX}:main_h-overlay_h-${imageOffsetY}:enable='between(t,0,${duration})'[video];
  // [video]drawtext=text='${titleText}':fontfile='${font}':fontsize=48:x=50:y=50:fontcolor=white:alpha='if(lt(t,${animationDuration}),t/${animationDuration},1)'[video1];
  // [video1]drawtext=text='${contentText}':fontfile='${font}':fontsize=30:x='if(lt(t,${animationDuration}),50-text_w+(t/${animationDuration})*text_w,50)':y=120:fontcolor=white[out];
  // `;

  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(bgVideo)
      .input(fgImage)
      .input(audio)
      .complexFilter(filterComplex, "out")
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
}) {
  try {
    console.log("Starting video generation process...");

    // Download audio if necessary
    const audioPath = audioUrl.startsWith("http")
      ? await downloadAudio(audioUrl)
      : formatPath(audioUrl);

    // Font file path
    const fontPath =
      "E:/Mogesh/Projects/interviewbix_videos/backend/functions/public/temp/SuperShiny.ttf";

    // Create the video
    const result = await createVideoWithAnimations({
      backgroundVideo: backgroundVideoPath,
      audioFile: audioPath,
      foregroundImage: imagePath,
      titleText: title,
      contentText: content,
      outputVideo: outputPath,
      fontPath,
      duration: 10,
    });

    console.log("Video successfully created at:", result);
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
      "E:/Mogesh/Projects/interviewbix_videos/backend/functions/public/temp/background.mp4";
    const imagePath = "E:/Mogesh/Projects/interviewbix_videos/backend/functions/public/temp/bg.jpg";
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
    });

    console.log("✅ Video creation process completed");
  } catch (error) {
    console.error("❌ Failed to create video:", error);
    process.exit(1);
  }
})();
