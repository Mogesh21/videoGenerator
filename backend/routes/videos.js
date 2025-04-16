import express from "express";
import path from "path";
import createVideo from "../functions/createVideo.js";
import createThumbnail from "../functions/createThumbnail.js";
import db from "../config/db.js";
import fs from "fs";

const router = express.Router();

export const percentage = {};
const connection = await db.getConnection();

router.post("/create", async (req, res) => {
  try {
    await connection.beginTransaction();
    const videoName = Date.now() + Math.floor(Math.random() * 9) + ".mp4";
    const [response] = await connection.query("INSERT INTO videos (name) VALUES (?)", [videoName]);
    const { assets, font, content, positions, size, duration, intro, outro, reqId } = req.body;
    percentage[reqId] = 0;
    const files = {
      background_image: path.join(process.cwd(), "public", "templates", assets.background_image),
      background_video: path.join(process.cwd(), "public", "templates", assets.background_video),
      audio: path.join(process.cwd(), "public", "templates", assets.audio),
    };

    if (intro) {
      files.intro_video = path.join(process.cwd(), "public", "templates", assets.intro_video);
    }
    if (outro) {
      files.outro_video = path.join(process.cwd(), "public", "templates", assets.outro_video);
    }

    const outputPath = path.join(process.cwd(), "public", "videos", videoName);
    const thumbnail = path.join(process.cwd(), "public", "images", "0", "thumbnail.png");

    const [newImages, wrappedQuestion, wrappedOptions, optionPosition, optionLength] =
      await createThumbnail({
        backgroundImagePath: files.background_image,
        content,
        positions,
        font,
        size,
      });

    content.images = newImages;
    content.text = wrappedQuestion;
    content.options = wrappedOptions;
    content.optionPosition = optionPosition;
    content.optionLength = optionLength;

    await createVideo({
      content: content,
      thumbnailPath: thumbnail,
      files: files,
      hasIntro: intro,
      hasOutro: outro,
      outputPath: outputPath,
      fontSettings: font,
      positions: positions,
      size: size,
      duration: duration,
      reqId: reqId,
    });

    await connection.commit();
    res.status(200).json({ message: "Video Created Successfully" });
  } catch (error) {
    console.log(error);
    await connection.rollback();
    if (error.name === "Image Error") {
      res.status(500).json({ message: "Unable to generate Image" });
    } else if (error.name === "Video Error") {
      res.status(500).json({ message: "Unable to create Video. Please check video resolution" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

router.get("/status/:id", async (req, res) => {
  try {
    const id = req.params.id;
    res.status(200).json({ progress: percentage[id] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to get progess " });
  }
});

router.get("/", async (req, res) => {
  try {
    const [data] = await db.query("SELECT * FROM VIDEOS WHERE is_deleted = 0");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to get progess " });
  }
});

router.delete("/", async (req, res) => {
  try {
    await connection.beginTransaction();
    const { id, name } = req.headers;
    const [data] = await connection.query("DELETE FROM videos WHERE id = ?", [id]);
    const videoPath = path.join(process.cwd(), "public", "videos", name);

    if (fs.existsSync(videoPath)) {
      fs.rmSync(videoPath);
    }
    await connection.commit();
    res.status(200).json(data);
  } catch (error) {
    await connection.rollback();
    console.log(error);
    res.status(500).json({ message: "Unable to get progess " });
  }
});

router.delete("/deleteVideos", async (req, res) => {
  try {
    await connection.beginTransaction();
    const { ids, names } = JSON.parse(req.headers.data);
    if (ids.length === 1) await connection.query("DELETE FROM videos WHERE id = ?", [ids]);
    else await connection.query("DELETE FROM videos WHERE id in (?)", [ids]);
    for (let i = 0; i < ids.length; i++) {
      const videoPath = path.join(process.cwd(), "public", "videos", names[i]);
      if (fs.existsSync(videoPath)) {
        fs.rmSync(videoPath);
      }
    }
    await connection.commit();
    res.status(200).json({ message: "videos deleted successfully" });
  } catch (error) {
    await connection.rollback();
    console.log(error);
    res.status(500).json({ message: "Unable to get progess " });
  }
});

export default router;
