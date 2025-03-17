import express from "express";
import path from "path";
import axios from "axios";
import fs from "fs";
import { PrismaClient as PrismaClient1 } from "../prisma/generated/client1/index.js";
import { PrismaClient as PrismaClient2 } from "../prisma/generated/client2/index.js";
import generateImages from "../functions/generateImage.js";
import generateVideo from "../functions/generateVideo.js";

const router = express.Router();
const db1 = new PrismaClient1();
const db2 = new PrismaClient2();

const progressData = {};

function secondsToHMS(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

const createImage = async (
  version_id,
  book_id,
  chapter_num,
  verse_num,
  hasTitle,
  hasAuthor,
  position,
  background_image,
  font,
  size
) => {
  const verseTable = "record" + version_id;

  const book = await db2.books.findFirst({
    select: {
      id: true,
      book_num: true,
      title: true,
      total_chap_count: true,
    },
    where: {
      version_id: parseInt(version_id),
      book_num: book_id.toString(),
    },
  });

  const verses = await db2[verseTable].findFirst({
    select: {
      book_num: true,
      content: true,
    },
    where: {
      chapter_num: chapter_num,
      verse_num: verse_num,
      book_num: book.book_num,
    },
  });

  const bgPath = path.join(process.cwd(), "public", "backgroundImages", background_image);
  const data = {
    titleText: book.title,
    contentText: verses.content,
    creditText: `${book.title}-${parseInt(chapter_num) + 1}-${parseInt(verse_num) + 1}`,
  };

  const images = await generateImages(bgPath, data, position, font, hasTitle, hasAuthor, size);
  const Image = path.join(process.cwd(), "public", "images", "0", images[0]);

  return Image;
};

const createVideo = async (
  audioUrl,
  version_id,
  book_id,
  chapter_num,
  verse_num,
  start_time,
  values,
  hasTitle,
  hasAuthor,
  position,
  background_imge,
  font,
  size,
  projectId,
  project_name
) => {
  let verses, book, audioPath, images;
  try {
    const verseTable = "record" + version_id;

    book = await db2.books.findFirst({
      select: {
        id: true,
        book_num: true,
        title: true,
        total_chap_count: true,
      },
      where: {
        version_id: parseInt(version_id),
        book_num: book_id.toString(),
      },
    });

    verses = await db2[verseTable].findFirst({
      select: {
        book_num: true,
        content: true,
      },
      where: {
        chapter_num: chapter_num.toString(),
        verse_num: verse_num.toString(),
        book_num: book.book_num,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Excel Error");
  }

  // try {
  //   const downloadFont = async (url, outputPath) => {
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) throw new Error(`Failed to fetch font: ${response.statusText}`);

  //       const buffer = await response.arrayBuffer();
  //       fs.writeFileSync(outputPath, Buffer.from(buffer));

  //       console.log("Font downloaded successfully.");
  //     } catch (error) {
  //       throw new Error("Error downloading font:");
  //     }
  //   };

  //   const fontUrl =
  //     "https://fonts.gstatic.com/s/jacquard12/v7/vm8ydRLuXETEweL79J4rGf2yWHvH4Q.woff2";
  //   const fontPath = path.join(process.cwd(), "font", "custom-font.tff");
  //   // await downloadFont(fontUrl, fontPath);
  // } catch (err) {
  //   console.log(err);
  //   throw new Error("Font Error");
  // }

  try {
    const bgPath = path.join(process.cwd(), "public", "backgroundImages", background_imge);
    const data = {
      titleText: book.title,
      contentText: verses.content,
      creditText: `${book.title}-${parseInt(chapter_num) + 1}-${parseInt(verse_num) + 1}`,
    };

    images = await generateImages(bgPath, data, position, font, hasTitle, hasAuthor, size);
  } catch (error) {
    console.log(error);
    throw new Error("Image Error");
  }
  try {
    const response = await axios.get(audioUrl, { responseType: "arraybuffer" });

    const dirPath = path.join(process.cwd(), "public/temp");
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    audioPath = path.join(dirPath, "sample.mp3");
    fs.writeFileSync(audioPath, response.data);
  } catch (error) {
    console.log("audio error");
    throw new Error("Audio Error");
  }

  const videos = [];
  try {
    const Image = images.map((image) => path.join(process.cwd(), "public", "images", "0", image));
    let i = 1;
    for (const img of Image) {
      const video = await generateVideo(
        audioPath,
        [img],
        [values + 1],
        secondsToHMS(start_time),
        projectId,
        `${project_name} - ${i}`
      );
      i += 1;
      videos.push(video);
    }
  } catch (err) {
    console.log(err);
    throw new Error("Video Error");
  }

  return videos;
};

router.get("/progress", (req, res) => {
  const id = req.headers.id;
  res.status(200).json({ status: progressData[id] || 0 });
});

router.post("/add", async (req, res) => {
  let projectId;
  try {
    const data = req.body;
    const {
      fileData,
      size,
      id,
      type,
      hasAuthor,
      hasTitle,
      position,
      background_image,
      font,
      project_name,
    } = data;

    const videos = [];
    let audioPath;

    progressData[id] = 0;

    const addProject = await db1.projects.create({
      data: {
        name: project_name,
      },
    });

    projectId = addProject.id;

    if (type === true) {
      try {
        for (const file of fileData) {
          const vid = await createVideo(
            file[0], //audioUrl
            file[1], //version_id
            (file[2] - 1).toString(), //book_id,
            (file[3] - 1).toString(), //chapter_num
            (file[4] - 1).toString(), //verse_num
            file[5], //start_time
            file[6], //values
            hasTitle,
            hasAuthor,
            position,
            background_image,
            font,
            size,
            projectId,
            project_name
          );

          videos.push(...vid);
          progressData[id] = Math.floor((videos.length / fileData.length) * 100);

          await db1.videos.create({
            data: {
              title_id: projectId,
              name: vid[0],
            },
          });
        }
      } catch (err) {
        console.log(err.name, err);
        try {
          if (projectId)
            await db1.projects.delete({
              where: {
                id: projectId,
              },
            });
        } catch (error) {
          console.log(error);
        }
        let message;
        if (err.message === "Excel Error") message = "Invalid Excel Data";
        else if (err.message === "Font Error") message = "Error Downloadind font";
        else if (err.message === "Image Error") message = "Error Generating Image";
        else if (err.message === "Video Error") message = "Error Generating Video";
        else if (err.message === "Audio Error") message = "Error Dowloading Audio";
        else message = "Internal Server Error";
        return res.status(500).json({ message: message });
      }

      fs.rmSync(path.join(process.cwd(), "public", "images", "0"), {
        recursive: true,
        force: true,
      });

      fs.rmSync(path.join(process.cwd(), "public", "temp"), { recursive: true, force: true });

      res.status(200).json({ videos: videos, id: projectId });
    } else {
      const images = [];
      try {
        for (const file of fileData) {
          const img = await createImage(
            file[1], //version_id
            (file[2] - 1).toString(), //book_id,
            (file[3] - 1).toString(), //chapter_num
            (file[4] - 1).toString(), //verse_num
            hasTitle,
            hasAuthor,
            position,
            background_image,
            font,
            size
          );

          images.push(img);
          progressData[id] = Math.floor((images.length / fileData.length) * 60);
        }
      } catch (err) {
        console.log(err);
        throw new Error("Image Error");
      }

      try {
        const audioUrl = fileData[0][0];
        const response = await axios.get(audioUrl, { responseType: "arraybuffer" });

        const dirPath = path.join(process.cwd(), "public/temp");
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }
        audioPath = path.join(dirPath, "sample.mp3");
        fs.writeFileSync(audioPath, response.data);
      } catch (error) {
        console.log(error);
        throw new Error("Audio Error");
      }

      const Values = fileData.map((file) => file[6]);

      let video;
      try {
        video = await generateVideo(audioPath, images, Values, "", projectId, project_name);
      } catch (err) {
        console.log(err);
        throw new Error("Video Error");
      }

      await db1.videos.create({
        data: {
          title_id: projectId,
          name: video,
        },
      });

      fs.rmSync(path.join(process.cwd(), "public", "images", "0"), {
        recursive: true,
        force: true,
      });

      fs.rmSync(path.join(process.cwd(), "public", "temp"), { recursive: true, force: true });

      res.status(200).json({ videos: video, id: projectId });
    }
  } catch (err) {
    console.log(err);
    try {
      if (projectId)
        await db1.projects.delete({
          where: {
            id: projectId,
          },
        });
    } catch (error) {
      console.log(error);
    }
    let message;
    if (err.message === "Excel Error") message = "Invalid Excel Data";
    else if (err.message === "Font Error") message = "Error Downloading font";
    else if (err.message === "Image Error") message = "Error Generating Image";
    else if (err.message === "Video Error") message = "Error Generating Video";
    else if (err.message === "Audio Error") message = "Error Dowloading Audio";
    else message = "Internal Server Error";
    return res.status(500).json({ message: message });
  } finally {
    // fs.rmSync(path.join(process.cwd(), "public", "images", "0"), {
    //   recursive: true,
    //   force: true,
    // });

    fs.rmSync(path.join(process.cwd(), "public", "temp"), { recursive: true, force: true });
  }
});

export default router;
