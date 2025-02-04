import express from "express";
import multer from "multer";
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

const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = `./public/temp/0`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, "bg" + path.extname(file.originalname));
  },
});

const images = multer({
  storage: imageStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

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
  title,
  content,
  author,
  size,
  bg,
  fontStyle
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

  const bgPath = path.join(process.cwd(), "public", "temp", "0", bg);
  title.text = book.title;
  content.text = verses.content;
  author.text = `${book.title}-${parseInt(book.book_num) + 1}-${parseInt(verse_num) + 1}`;

  const images = await generateImages(bgPath, title, content, author, 0, size, true, fontStyle);
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
  title,
  content,
  author,
  size,
  bg,
  projectId,
  fontStyle
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

  try {
    const bgPath = path.join(process.cwd(), "public", "temp", "0", bg);
    title.text = book.title;
    content.text = verses.content;
    author.text = `${book.title}-${verses.book_num}-${parseInt(verse_num) + 1}`;

    images = await generateImages(bgPath, title, content, author, 0, size, true, fontStyle);

    const response = await axios.get(audioUrl, {
      responseType: "arraybuffer",
    });
    audioPath = `${process.cwd()}/public/temp/0/sample.mp3`;
    fs.writeFileSync(audioPath, response.data);
  } catch (error) {
    console.log(error);
    throw new Error("Image Error");
  }

  const videos = [];
  try {
    const Image = images.map((image) => path.join(process.cwd(), "public", "images", "0", image));

    for (const img of Image) {
      const video = await generateVideo(
        audioPath,
        [img],
        [values + 1],
        secondsToHMS(start_time),
        projectId
      );
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

router.post("/add", images.single("background_image"), async (req, res) => {
  let projectId;
  try {
    const data = JSON.parse(req.body.data);
    const { name, fileData, title, content, author, size, id, type, style } = data;
    const bg = req.file.filename;

    const videos = [];

    progressData[id] = 0;

    const addProject = await db1.projects.create({
      data: {
        name: name,
        title: title.text,
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
            title,
            content,
            author,
            size,
            bg,
            projectId,
            style
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
        await db1.projects.delete({
          where: {
            id: projectId,
          },
        });
        let message;
        if (err.message === "Excel Error") message = "Invalid Excel Data";
        else if (err.message === "Image Error") message = "Error Generating Image";
        else if (err.message === "Video Error") message = "Error Generating Video";
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
            title,
            content,
            author,
            size,
            bg,
            style
          );

          images.push(img);
          progressData[id] = Math.floor((images.length / fileData.length) * 60);
        }
      } catch (err) {
        await db1.projects.delete({
          where: {
            id: projectId,
          },
        });
        return res.status(500).json({ message: "Error Generating Image", err: err });
      }

      const response = await axios.get(fileData[0][0], {
        responseType: "arraybuffer",
      });

      const audioPath = `${process.cwd()}/public/temp/0/sample.mp3`;
      fs.writeFileSync(audioPath, response.data);

      const Values = fileData.map((file) => file[6]);

      let video;
      try {
        video = await generateVideo(audioPath, images, Values, "", projectId);
      } catch (err) {
        console.log(err);
        await db1.projects.delete({
          where: {
            id: projectId,
          },
        });
        return res.status(500).json({ message: "Error Generating Video", err: err });
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
    console.log(projectId);
    await db1.projects.delete({
      where: {
        id: projectId,
      },
    });
    res.status(500).json({ message: "Internal Server Error", err: err });
  } finally {
    fs.rmSync(path.join(process.cwd(), "public", "images", "0"), {
      recursive: true,
      force: true,
    });

    fs.rmSync(path.join(process.cwd(), "public", "temp"), { recursive: true, force: true });
  }
});

// router.post("/add", images.single("background_image"), async (req, res) => {
//   try {
//     // const name = JSON.parse(req.body.name) || "";

//     const title = JSON.parse(req.body.title) || "";
//     const content = JSON.parse(req.body.content) || "";
//     const author = JSON.parse(req.body.author) || "";
//     const size = JSON.parse(req.body.size) || "";
//     const verseType = JSON.parse(req.body.versetype);
//     const bg = req.file.filename;

//     const ProjectId = addProject.id;
//     const bgPath = path.join(process.cwd(), "public", "temp", bg);

//     const images = await generateImages(bgPath, title, content, author, ProjectId, size, verseType);

//     fs.unlinkSync(bgPath);
//     fs.rmdirSync(path.join(process.cwd(), "public", "temp"));

//     res.status(200).json({ images, id: ProjectId });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Unable to create Images" });
//   }
// });

export default router;
