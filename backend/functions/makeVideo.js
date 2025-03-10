import ffmpeg from "fluent-ffmpeg";
import path from "path";
import fs from "fs";

const makeVideo = async (
  fileData,
  projectId,
  project_name,
  fontSettings,
  positions,
  hasTitle,
  hasAuthor,
  type,
  size
) => {
  try {
    console.log("Starting video creation process...");

    const videoName = `${project_name}.mp4`;
    const videoUrl = "http://localhost:8080/public/bgvideos/bgvideo.mp4";

    // Ensure the output directory exists
    const outputDir = path.join(process.cwd(), "public", "videos", projectId.toString());
    fs.mkdirSync(outputDir, { recursive: true });

    const outputFilePath = path.join(outputDir, videoName);

    console.log("Output file path:", outputFilePath);

    // Font paths with fallbacks
    const getFontPath = (fontName, fallback) => {
      const fontPath = path.join(
        process.cwd(),
        "font",
        fontName ? `${fontName}.ttf` : `${fallback}.ttf`
      );
      return fontPath;
    };

    const titleFont = getFontPath(fontSettings.title_font, "Sans");
    const contentFont = getFontPath(fontSettings.content_font, "Sans");
    const creditFont = getFontPath(fontSettings.credit_font, "Sans");
    const escapeText = (text) => text.replace(/'/g, "\\'").replace(/:/g, "\\:");
    const videoFilters = [
      {
        filter: "scale",
        options: `${size.width}:${size.height}`,
      },
    ];

    fileData.forEach((data, index) => {
      const { startTime, duration } = data;
      console.log(`Processing verse ${index + 1}:`, data);

      if (hasTitle) {
        videoFilters.push({
          filter: "drawtext",
          options: {
            fontfile: titleFont,
            text: escapeText(data.title),
            fontcolor: fontSettings.title_color,
            fontsize: fontSettings.title_size,
            x: positions.title.x.toString(),
            y: positions.title.y.toString(),
            box: 0,
            boxcolor: "black@0",
            alignment: fontSettings.title_align === "center" ? 2 : 1,
            enable: `between(t,${startTime},${startTime + duration})`,
            // fade: `in:st=${startTime}:d=1, out:st=${startTime + duration - 1}:d=1`,
          },
        });
      }

      // videoFilters.push({
      //   filter: "fade",
      //   options: `t=in:st=${startTime}:d=1, t=out:st=${startTime + duration - 1}:d=1`,
      // });

      videoFilters.push({
        filter: "drawtext",
        options: {
          fontfile: contentFont,
          text: escapeText(data.content),
          fontcolor: fontSettings.content_color,
          fontsize: fontSettings.content_size,
          x: positions.content.x.toString(),
          y: positions.content.y.toString(),
          box: 1,
          boxcolor: "black@0",
          boxborderw: 5,
          alignment: fontSettings.content_align === "center" ? 2 : 1,
          line_spacing: fontSettings.line_height,
          wrap: 1,
          width: fontSettings.content_width,
          enable: `between(t,${startTime},${startTime + duration})`,
          // fade: `in:st=${startTime}:d=1, out:st=${startTime + duration - 1}:d=1`,
        },
      });

      videoFilters.push({
        filter: "fade",
        options: `t=in:st=${startTime}:d=1, t=out:st=${startTime + duration - 1}:d=1`,
      });

      if (hasAuthor) {
        videoFilters.push({
          filter: "drawtext",
          options: {
            fontfile: escapeText(creditFont),
            text: `${data.title} ${data.chapter_num}:${data.verse_num}`,
            fontcolor: fontSettings.credit_color,
            fontsize: fontSettings.credit_size,
            x: positions.credit.x.toString(),
            y: positions.credit.y.toString(),
            box: 0,
            boxcolor: "black@0",
            alignment: fontSettings.credit_align === "right" ? 3 : 1,
            enable: `between(t,${startTime},${startTime + duration})`,
            // fade: `in:st=${startTime}:d=1, out:st=${startTime + duration - 1}:d=1`,
          },
        });
      }
    });

    console.log(videoUrl);
    await new Promise((resolve, reject) => {
      console.log("Starting FFmpeg process...");

      ffmpeg()
        .input(videoUrl)
        .input(fileData[0].audioUrl)
        .videoFilters(videoFilters)
        .outputOptions([
          "-c:v libx264",
          "-preset fast",
          "-crf 18",
          "-c:a aac",
          "-shortest",
          "-movflags +faststart",
        ])
        .output(outputFilePath)
        .on("start", (cmd) => console.log(`FFmpeg command: ${cmd}`))
        .on("progress", (progress) => {
          console.log(1);
          console.log(`Processing: ${Math.floor(progress.percent)}% done`);
        })
        .on("end", () => {
          console.log("FFmpeg process completed successfully.");
          resolve();
        })
        .on("error", (err) => {
          console.error("FFmpeg error:", err);
          reject(err);
        })
        .run();
    });

    console.log("Video created successfully:", outputFilePath);
    return outputFilePath;
  } catch (error) {
    console.error("Video creation failed:", error);
    throw error;
  }
};

export default makeVideo;

// ffmpeg -i http://localhost:8080/public/bgvideos/bgvideo.mp4 -i https://android.jaqer.com/bible/nkjv/06001.mp3 -y -filter_complex "[0:v]scale=1080:1080,drawtext=fontfile='E\\:/Mogesh/Projects/video-generator/backend/font/Sans.ttf':text='Joshua':fontcolor=#58f901:fontsize=60:x=93:y=16:box=0:boxcolor=black@0:alignment=2:enable='between(t,1,15)',drawtext=fontfile='E\\:/Mogesh/Projects/video-generator/backend/font/Sans.ttf':text='After the death of Moses the servant of the Lord\, it came to pass that the Lord spoke to Joshua the son of Nun\, Moses\’ assistant\, saying\:' :fontcolor=#60ff0a:fontsize=50:x=28:y=57:box=1:boxcolor=black@0:boxborderw=5:alignment=2:line_spacing=5:wrap=1:width=900:enable='between(t,1,15)',drawtext=fontfile='E\\:/Mogesh/Projects/video-generator/backend/font/Sans.ttf':text='Joshua 6\:1':fontcolor=#04ff00:fontsize=50:x=229:y=296:box=0:boxcolor=black@0:alignment=1:enable='between(t,1,15)'[v]" -map "[v]" -map 1:a -c:v libx264 -preset fast -crf 18 -c:a aac -shortest -movflags +faststart -f mp4 "E:/Mogesh/Projects/video-generator/backend/public/videos/437/sampel.mp4"

// ffmpeg -i http://localhost:8080/public/bgvideos/bgvideo.mp4 -i https://android.jaqer.com/bible/nkjv/06001.mp3 -y -filter:v "scale=1080:1080, \ drawtext=fontfile=E:/Mogesh/Projects/video-generator/backend/font/Sans.ttf:text='Joshua':fontcolor=#58f901:fontsize=60:x=93:y=16:box=0:boxcolor=black@0:alignment=2:enable='between(t,1,15)', \ drawtext=fontfile=E:/Mogesh/Projects/video-generator/backend/font/Sans.ttf:text='After the death of Moses the servant of the Lord, it came to pass that the Lord spoke to Joshua the son of Nun, Moses’ assistant, saying\\:  ':fontcolor=#60ff0a:fontsize=50:x=28:y=57:box=1:boxcolor=black@0:boxborderw=5:alignment=2:line_spacing=20:wrap=1:width=900:enable='between(t,1,15)', \ drawtext=fontfile=E:/Mogesh/Projects/video-generator/backend/font/Sans.ttf:text='Joshua 6:1':fontcolor=#04ff00:fontsize=50:x=229:y=296:box=0:boxcolor=black@0:alignment=1:enable='between(t,1,15)', \ fade=t=in:st=1:d=1,fade=t=out:st=14:d=1" \ -c:v libx264 -preset fast -crf 18 -c:a aac -shortest -f mp4 -movflags +faststart \ "E:/Mogesh/Projects/video-generator/backend/public/videos/437/sampel.mp4" 

// ffmpeg -i http://localhost:8080/public/bgvideos/bgvideo.mp4 -i https://android.jaqer.com/bible/nkjv/06001.mp3 -y -filter_complex "[0:v]scale=1080:1080, drawtext=fontfile='E\:/Mogesh/Projects/video-generator/backend/font/Sans.ttf':text='Joshua':fontcolor=#58f901:fontsize=60:x=93:y=16:box=0:boxcolor=black@0:alignment=2:enable='between(t,1,15)', drawtext=fontfile='E\:/Mogesh/Projects/video-generator/backend/font/Sans.ttf':text='After the death of Moses the servant of the Lord\, it came to pass that the Lord spoke to Joshua the son of Nun\, Moses\’ assistant\, saying\:' :fontcolor=#60ff0a:fontsize=50:x=28:y=57:box=1:boxcolor=black@0:boxborderw=5:alignment=2:line_spacing=10:wrap=1:width=900:enable='between(t,1,15)', \ fade=t=in:st=1:d=1,fade=t=out:st=14:d=1, drawtext=fontfile='E\:/Mogesh/Projects/video-generator/backend/font/Sans.ttf':text='Joshua-6-1':fontcolor=#04ff00:fontsize=50:x=229:y=296:box=0:boxcolor=black@0:alignment=1:enable='between(t,1,15)'[v]" \ -map "[v]" -map 1:a -c:v libx264 -preset fast -crf 18 -c:a aac -shortest -movflags +faststart \ "E:/Mogesh/Projects/video-generator/backend/public/videos/437/sample.mp4"

// ffmpeg -i http://localhost:8080/public/bgvideos/bgvideo.mp4 -i https://android.jaqer.com/bible/nkjv/06001.mp3 -y -filter_complex "[0:v]scale=1080:1080, drawtext=fontfile='E\:/Mogesh/Projects/video-generator/backend/font/Sans.ttf':text='Joshua':fontcolor=#58f901:fontsize=60:x=93:y=16:box=0:boxcolor=black@0:alignment=9:enable='between(t,1,15)',drawtext=fontfile='E\:/Mogesh/Projects/video-generator/backend/font/Sans.ttf':text='After the death of Moses the servant of the Lord\, it came to pass that the Lord spoke to Joshua the son of Nun\, Moses\’ assistant\, saying\:':fontcolor=#60ff0a:fontsize=50:x=28:y=57:box=1:boxcolor=black@0.5:boxborderw=5:alignment=9:line_spacing=10:wrap=1:width=900:enable='between(t,1,15)',drawtext=fontfile='E\:/Mogesh/Projects/video-generator/backend/font/Sans.ttf':text='Joshua-6-1':fontcolor=#04ff00:fontsize=50:x=229:y=296:box=0:boxcolor=black@0:alignment=1:enable='between(t,1,15)',fade=t=in:st=1:d=1,fade=t=out:st=14:d=1[v]" \ -map "[v]" -map 1:a \ -c:v libx264 -preset fast -crf 18 -c:a aac -shortest -movflags +faststart \ "E:/Mogesh/Projects/video-generator/backend/public/videos/437/sample.mp4"

// ffmpeg -i http://localhost:8080/public/bgvideos/bgvideo.mp4 -i https://android.jaqer.com/bible/nkjv/06001.mp3 -y -filter_complex "[0:v]scale=1080:1080,drawtext=fontfile='E\:/Mogesh/Projects/video-generator/backend/font/Sans.ttf':text='Joshua':fontcolor=#58f901:fontsize=60:x=279:y=48:box=0:boxcolor=black@0:enable='between(t,1,15)',drawtext=fontfile='E\:/Mogesh/Projects/video-generator/backend/font/Sans.ttf':text='After the death of Moses the servant of the Lord\, it came':fontcolor=#60ff0a:fontsize=50:x=84:y=171:box=1:boxcolor=black@0.5:boxborderw=5:line_spacing=10:enable='between(t,1,15)',drawtext=fontfile='E\:/Mogesh/Projects/video-generator/backend/font/Sans.ttf':text='to pass that the Lord spoke to Joshua the son of Nun\,':fontcolor=#60ff0a:fontsize=50:x=84:y=351:box=1:boxcolor=black@0.5:boxborderw=5:line_spacing=10:enable='between(t,1,15)',drawtext=fontfile='E\:/Mogesh/Projects/video-generator/backend/font/Sans.ttf':text='Moses\’ assistant\, saying\:':fontcolor=#60ff0a:fontsize=50:x=84:y=531:box=1:boxcolor=black@0.5:boxborderw=5:line_spacing=10:enable='between(t,1,15)',drawtext=fontfile='E\:/Mogesh/Projects/video-generator/backend/font/Sans.ttf':text='Joshua-6-1':fontcolor=#04ff00:fontsize=50:x=687:y=888:box=0:boxcolor=black@0:enable='between(t,1,15)',fade=t=in:st=1:d=1,fade=t=out:st=14:d=1[v]" -map "[v]" -map 1:a -c:v libx264 -preset fast -crf 18 -c:a aac -shortest -movflags +faststart "E:/Mogesh/Projects/video-generator/backend/public/videos/437/sample.mp4"