import path from "path";
import ffmpeg from "fluent-ffmpeg";
import fs from "fs";

const VideoGenerator = async (
  audioUrl,
  Images,
  Values,
  start_time = "",
  projectId,
  project_name,
  intro,
  outro,
  audio
) => {
  try {
    const videoName = `${project_name}.mp4`;

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

      // if (start_time) command.input(audioUrl).inputOptions(["-ss", start_time]);
      // else command.input(audioUrl);

      // Build video filters
      const videoParts = Images.map(
        (_, index) => `[${index}:v]trim=0:${Values[index] || 2},setpts=PTS-STARTPTS[v${index}];`
      ).join("");

      const concatInputs = Images.map((_, index) => `[v${index}]`).join("");
      const concatFilter = `concat=n=${Images.length}:v=1:a=0[outv];`;

      // Durations
      const introDuration = intro ? Values[0] || 3 : 0;
      const outroDuration = outro ? Values[Values.length - 1] || 3 : 0;
      const totalVideoDuration = Values.reduce((sum, val) => sum + (val || 2), 0);

      // Middle audio duration (excluding intro and outro)
      const audioPlayDuration = totalVideoDuration - introDuration - outroDuration;

      // // Audio input index (after images)
      // const audioInputIndex = Images.length;

      // // Build audio filters
      // let audioFilter = "";
      // const audioParts = [];

      // if (intro) {
      //   audioParts.push(
      //     `[${audioInputIndex}:a]atrim=0:${introDuration},asetpts=PTS-STARTPTS,volume=0[aIntro]`
      //   );
      // }

      // if (audioPlayDuration > 0) {
      //   audioParts.push(
      //     `[${audioInputIndex}:a]atrim=${introDuration - 2 || 0}:${
      //       introDuration + audioPlayDuration
      //     },asetpts=PTS-STARTPTS[aMid]`
      //   );
      // }

      // if (outro) {
      //   audioParts.push(
      //     `[${audioInputIndex}:a]atrim=${
      //       introDuration + audioPlayDuration
      //     }:${totalVideoDuration},asetpts=PTS-STARTPTS,volume=0[aOutro]`
      //   );
      // }

      // // Concatenate audio parts
      // const concatLabels = [];
      // if (intro) concatLabels.push("[aIntro]");
      // if (audioPlayDuration > 0) concatLabels.push("[aMid]");
      // if (outro) concatLabels.push("[aOutro]");

      // if (concatLabels.length > 0) {
      //   audioParts.push(`${concatLabels.join("")}concat=n=${concatLabels.length}:v=0:a=1[aout]`);
      //   audioFilter = audioParts.join(";");
      // } else {
      //   audioFilter = `[${audioInputIndex}:a]anull[aout]`;
      // }

      // // Final filter_complex string
      // const filterComplex = videoParts + concatInputs + concatFilter + audioFilter;

      const audioName = audio || "introAudio.mp3";
      const introAudioUrl = path.join(process.cwd(), "public", "backgroundImages", audioName);
      const outroAudioUrl = path.join(process.cwd(), "public", "backgroundImages", audioName);
      let audioInputIndex = Images.length;
      let audioFilter = "";

      if (introAudioUrl) {
        command.input(introAudioUrl);
        audioInputIndex++; // intro audio at Images.length
      }
      if (start_time) command.input(audioUrl).inputOptions(["-ss", start_time]);
      else command.input(audioUrl);
      audioInputIndex++; // main audio index = Images.length + 1 or +2
      if (outroAudioUrl) {
        command.input(outroAudioUrl);
        audioInputIndex++; // outro audio
      }

      const baseIndex = Images.length;
      const introIndex = introAudioUrl ? baseIndex : null;
      const mainIndex = introAudioUrl ? baseIndex + 1 : baseIndex;
      const outroIndex = outroAudioUrl ? (introAudioUrl ? baseIndex + 2 : baseIndex + 1) : null;

      const audioParts = [];

      if (intro && introAudioUrl) {
        audioParts.push(`[${introIndex}:a]atrim=0:${introDuration},asetpts=PTS-STARTPTS[aIntro]`);
      }

      if (audioPlayDuration > 0) {
        audioParts.push(`[${mainIndex}:a]atrim=0:${audioPlayDuration},asetpts=PTS-STARTPTS[aMid]`);
      }

      if (outro && outroAudioUrl) {
        audioParts.push(`[${outroIndex}:a]atrim=0:${outroDuration},asetpts=PTS-STARTPTS[aOutro]`);
      }

      const concatLabels = [];
      if (intro && introAudioUrl) concatLabels.push("[aIntro]");
      if (audioPlayDuration > 0) concatLabels.push("[aMid]");
      if (outro && outroAudioUrl) concatLabels.push("[aOutro]");

      if (concatLabels.length > 0) {
        audioParts.push(`${concatLabels.join("")}concat=n=${concatLabels.length}:v=0:a=1[aout]`);
        audioFilter = audioParts.join(";");
      } else {
        audioFilter = `[${mainIndex}:a]anull[aout]`;
      }

      const filterComplex = videoParts + concatInputs + concatFilter + audioFilter;

      command
        .complexFilter([filterComplex])
        .outputOptions([
          "-map",
          "[outv]",
          "-map",
          "[aout]",
          "-c:v",
          "libx264",
          "-pix_fmt",
          "yuv420p",
          // "-shortest",
          "-loglevel",
          "verbose",
        ])
        .output(videoPath)
        .on("start", (cmd) => {
          console.log(cmd);
        })
        // .on("progress", (val) => {
        //   console.log(val);
        // })
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
