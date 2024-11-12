import path from "path";
import ffmpeg from "fluent-ffmpeg";
import fs from "fs";

const VideoGenerator = async (audioUrl, Images, Values, start_time = "", projectId) => {
  try {
    const videoName = `${Date.now()}.mp4`;

    console.log(projectId);

    fs.mkdirSync(path.join(process.cwd(), "public", "videos", projectId.toString()), {
      recursive: true,
    });

    const videoPath = path.join(process.cwd(), "public", "videos", projectId.toString(), videoName);

    return new Promise(async (resolve, reject) => {
      const command = ffmpeg();

      Images.forEach((image, index) => {
        const duration = Values[index] || 5;
        command.input(image).inputOptions(["-loop 1", `-t ${duration}`]);
      });

      if (start_time) command.input(audioUrl).inputOptions(["-ss", start_time]);
      else command.input(audioUrl);

      const filterComplex =
        Images.map(
          (_, index) => `[${index}:v]trim=0:${Values[index] || 2},setpts=PTS-STARTPTS[v${index}];`
        ).join("") +
        Images.map((_, index) => `[v${index}]`).join("") +
        `concat=n=${Images.length}:v=1:a=0[outv];[${Images.length}:a]anull[aout]`;

      await command
        .complexFilter([filterComplex])
        .outputOptions([
          "-map",
          "[outv]",
          "-map",
          "[aout]",
          "-c:v libx264",
          "-pix_fmt yuv420p",
          "-shortest",
          "-loglevel verbose",
        ])
        .output(videoPath)
        .on("start", (cmd) => {
          // console.log(cmd);
        })
        .on("end", () => {
          // console.log("Video created successfully:", videoPath);
          resolve(videoName);
        })
        .on("error", (err) => {
          console.error("Error during video processing:", err);
          reject(err);
        })
        .run();
    });
  } catch (err) {
    console.log(err);
    fs.rmSync(path.join(process.cwd(), "public", "images", "0"), {
      recursive: true,
      force: true,
    });
    fs.rmSync(path.join(process.cwd(), "public", "temp"), { recursive: true, force: true });
    return new Error(err);
  }
};

export default VideoGenerator;
