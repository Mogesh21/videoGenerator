import express from "express";
import fs from "fs";
import path from "path";
import multer from "multer";
import db from "../config/db.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = `./public/templates`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + Math.floor(Math.random() * 9) + path.extname(file.originalname));
  },
});

const assets = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 },
});

router.get("/", async (req, res) => {
  try {
    const [data] = await db.query(
      `SELECT 
              id,
              name,
              background_image,
              background_video,
              intro_video,
              outro_video,
              audio,
              intro,
              outro,
              font,
              positions,
              size,
              duration
            FROM templates;
            `,
      []
    );

    const updatedData = data.map((temp) => ({
      ...temp,
      font: temp.font ? JSON.parse(temp.font) : {},
      positions: temp.positions ? JSON.parse(temp.positions) : {},
      size: temp.size ? JSON.parse(temp.size) : {},
      duration: temp.duration ? JSON.parse(temp.duration) : {},
    }));

    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post(
  "/create",
  assets.fields([
    { name: "backgroundImage", maxCount: 1 },
    { name: "backgroundVideo", maxCount: 1 },
    { name: "intro_video", maxCount: 1 },
    { name: "outro_video", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const data = JSON.parse(req.body.data);
      const intro = req?.files["intro_video"];
      const outro = req?.files["outro_video"];
      const bg_image = req?.files["backgroundImage"][0].filename || "";
      const bg_video = req?.files["backgroundVideo"][0].filename || "";
      const intro_video = intro ? intro[0].filename : "";
      const outro_video = outro ? outro[0].filename : "";
      const audio = req?.files["audio"];
      const audio_name = audio ? audio[0].filename : "";
      const query = `INSERT INTO templates (
            name,
            background_image,
            background_video,
            intro_video,
            outro_video,
            audio,
            intro,
            outro,
            font,
            positions,
            size,
            duration
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      const values = [
        data.name,
        bg_image,
        bg_video,
        intro_video,
        outro_video,
        audio_name,
        data.intro,
        data.outro,
        JSON.stringify(data.font),
        JSON.stringify(data.positions),
        JSON.stringify(data.size),
        JSON.stringify(data.duration),
      ];

      await db.query(query, values);
      res.status(200).end();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

router.put(
  "/edit",
  assets.fields([
    { name: "backgroundImage", maxCount: 1 },
    { name: "backgroundVideo", maxCount: 1 },
    { name: "intro_video", maxCount: 1 },
    { name: "outro_video", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const data = JSON.parse(req.body.data);

      const image = req?.files["backgroundImage"];
      const bg_image = image ? image[0].filename : data.background_image;
      if (image) {
        fs.rmSync(`./public/templates/${data.background_image}`);
      }
      const video = req?.files["backgroundImage"];
      const bg_video = video ? video[0].filename : data.background_video;
      if (video) {
        fs.rmSync(`./public/templates/${data.background_video}`);
      }
      const intro = req?.files["backgroundImage"];
      const intro_video = intro ? intro[0].filename : data.intro_video;
      if (intro) {
        fs.rmSync(`./public/templates/${data.intro_video}`);
      }
      const outro = req?.files["backgroundImage"];
      const outro_video = outro ? outro[0].filename : data.outro_video;
      if (outro) {
        fs.rmSync(`./public/templates/${data.outro_video}`);
      }

      // const intro_video = req?.files["logo_image"];
      // const logo_image = logo ? logo[0].filename : data.logo_image;

      // if (logo && data.logo_image) {
      //   const stats = fs.statSync(`./public/templates/${data.logo_image}`);
      //   if (stats.isFile()) {
      //     fs.rmSync(`./public/templates/${data.logo_image}`);
      //   }
      // }

      const audio = req?.files["audio"];
      const audio_name = audio ? audio[0].filename : data.audio;
      if (audio && data.audio) {
        const stats = fs.statSync(`./public/templates/${data.audio}`);
        if (stats.isFile()) {
          fs.rmSync(`./public/templates/${data.audio}`);
        }
      }

      const query = `
        UPDATE templates
        SET
          name = ?,
          background_image = ?,
          background_video = ?,
          intro_video = ?,
          outro_video = ?,
          audio = ?,
          intro = ?,
          outro = ?,
          font = ?,
          positions = ?,
          size = ?,
          duration = ?
        WHERE id = ?`;

      const values = [
        data.name,
        bg_image,
        bg_video,
        intro_video,
        outro_video,
        audio_name,
        data.intro,
        data.outro,
        JSON.stringify(data.font),
        JSON.stringify(data.positions),
        JSON.stringify(data.size),
        JSON.stringify(data.duration),
        data.id,
      ];

      await db.query(query, values);

      res.status(200).end();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

router.put("/delete", async (req, res) => {
  try {
    const data = req.body;
    const query = `
        DELETE FROM templates
        WHERE id = ?
      `;

    const values = [data.id];

    const [response] = await db.query(query, values);

    if (data.background_image) {
      fs.rmSync(`./public/templates/${data.background_image}`);
    }
    if (data.background_video) {
      fs.rmSync(`./public/templates/${data.background_video}`);
    }
    if (data.intro_video) {
      fs.rmSync(`./public/templates/${data.intro_video}`);
    }
    if (data.outro_video) {
      fs.rmSync(`./public/templates/${data.outro_video}`);
    }
    if (data.audio) {
      fs.rmSync(`./public/templates/${data.audio}`);
    }

    res.status(200).json({ message: "Template deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
