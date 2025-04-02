import ffmpeg from "fluent-ffmpeg";
import fs from "fs";
import axios from "axios";
import opentype from "opentype.js";

async function downloadAudio(url, outputPath) {
  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  });
  return new Promise((resolve, reject) => {
    const writer = fs.createWriteStream(outputPath);
    response.data.pipe(writer);
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

async function loadFont(fontPath) {
  return new Promise((resolve, reject) => {
    opentype.load(fontPath, (err, font) => {
      if (err) reject(err);
      else resolve(font);
    });
  });
}

async function createVideo({
  backgroundVideo,
  audioFile,
  foregroundImage,
  titleText,
  contentText,
  outputVideo,
  fontPath,
}) {
  const font = await loadFont(fontPath);
  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(backgroundVideo)
      .input(audioFile)
      .input(foregroundImage)
      .complexFilter([
        "[0:v]scale=1280:720[bg];",
        "[1:v]scale=300:300[fg];",
        "[bg][fg]overlay=W-w-20:H-h-20[video];",
        {
          filter: "drawtext",
          options: {
            text: titleText,
            // font: font,
            fontfile: fontPath,
            fontsize: 48,
            x: 50,
            y: 50,
            fontcolor: "white",
          },
        },
        {
          filter: "drawtext",
          options: {
            text: contentText,
            fontfile: fontPath,
            fontsize: 30,
            x: 50,
            y: 120,
            fontcolor: "white",
          },
        },
      ])
      .outputOptions("-c:v libx264", "-c:a aac", "-strict experimental")
      .save(outputVideo)
      .on("end", () => resolve(outputVideo))
      .on("error", reject);
  });
}

async function generateVideo({
  videoPath,
  audioUrl,
  imagePath,
  title,
  content,
  outputPath,
  fontPath,
}) {
  const audioPath = "temp_audio.mp3";
  await downloadAudio(audioUrl, audioPath);
  await createVideo({
    backgroundVideo: videoPath,
    audioFile: audioPath,
    foregroundImage: imagePath,
    titleText: title,
    contentText: content,
    outputVideo: outputPath,
    fontPath: fontPath,
  });
  fs.unlinkSync(audioPath);
  console.log("Video created:", outputPath);
}

// Example usage
generateVideo({
  videoPath: "background.mp4",
  audioUrl: "https://android.jaqer.com/bible/nkjv/06001.mp3",
  imagePath: "overlay.png",
  title: "Sample Title",
  content: "Sample Content",
  outputPath: "output.mp4",
  fontPath: "/backend/font/Super Shiny.ttf",
}).catch(console.error);
