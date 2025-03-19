import express from "express";
import fs from "fs";
import { PrismaClient } from "../prisma/generated/client1/index.js";
import path from "path";
import multer from "multer";

const router = express.Router();
const prisma = new PrismaClient();

const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = `./public/backgroundImages`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, "bg" + Date.now() + path.extname(file.originalname));
  },
});

const images = multer({
  storage: imageStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.get("/", async (req, res) => {
  try {
    const data = await prisma.templates.findMany({
      select: {
        id: true,
        name: true,
        intro: true,
        outro: true,
        position: true,
        background_image: true,
        logo_image: true,
        font: true,
        hasAuthor: true,
        hasTitle: true,
        size: true,
      },
    });

    const updatedData = data.map((temp) => ({
      ...temp,
      size: JSON.parse(temp.size),
      font: JSON.parse(temp.font),
      position: JSON.parse(temp.position),
    }));

    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post(
  "/create",
  images.fields([
    { name: "backgroundImage", maxCount: 1 },
    { name: "logo_image", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const data = JSON.parse(req.body.data);
      const bg_name = req?.files["backgroundImage"][0].filename || "";
      const logo_image = req?.files["logo_image"][0].filename || "";
      await prisma.templates.create({
        data: {
          name: data.name,
          background_image: bg_name,
          logo_image: logo_image,
          position: JSON.stringify(data.position),
          font: JSON.stringify(data.font),
          hasAuthor: parseInt(data.hasAuthor),
          hasTitle: parseInt(data.hasTitle),
          size: JSON.stringify(data.size),
          intro: data.intro,
          outro: data.outro,
        },
      });
      res.status(200).end();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

router.put(
  "/edit",
  images.fields([
    { name: "backgroundImage", maxCount: 1 },
    { name: "logo_image", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const data = JSON.parse(req.body.data);

      const bg = req?.files["backgroundImage"];
      const bg_name = bg ? bg[0].filename : data.background_image;
      if (bg) {
        fs.rmSync(`./public/backgroundImages/${data.background_image}`);
      }

      const logo = req?.files["logo_image"];
      const logo_image = logo ? logo[0].filename : data.logo_image;
      if (logo) {
        const stats = fs.statSync(`./public/backgroundImages/${data.logo_image}`);
        if (stats.isFile()) {
          fs.rmSync(`./public/backgroundImages/${data.logo_image}`);
        }
      }

      await prisma.templates.update({
        data: {
          name: data.name,
          background_image: bg_name,
          logo_image: logo_image,
          position: JSON.stringify(data.position),
          font: JSON.stringify(data.font),
          hasAuthor: parseInt(data.hasAuthor),
          hasTitle: parseInt(data.hasTitle),
          size: JSON.stringify(data.size),
          intro: data.intro,
          outro: data.outro,
        },
        where: {
          id: data.id,
        },
      });
      res.status(200).end();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

router.put("/delete", async (req, res) => {
  try {
    const { id, bg } = req.body;
    const response = await prisma.templates.delete({
      where: {
        id: id,
      },
    });

    if (bg) {
      fs.rmSync(`./public/backgroundImages/${bg}`);
    }

    res.status(200).json({ message: "Template deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
