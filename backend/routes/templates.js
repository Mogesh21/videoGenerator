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
        position: true,
        background_image: true,
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

router.post("/create", images.single("backgroundImage"), async (req, res) => {
  try {
    const data = JSON.parse(req.body.data);
    const bg_name = req?.file.filename || "";
    await prisma.templates.create({
      data: {
        name: data.name,
        background_image: bg_name,
        position: JSON.stringify(data.position),
        font: JSON.stringify(data.font),
        hasAuthor: parseInt(data.hasAuthor),
        hasTitle: parseInt(data.hasTitle),
        size: JSON.stringify(data.size),
      },
    });
    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put("/edit", images.single("backgroundImage"), async (req, res) => {
  try {
    const data = JSON.parse(req.body.data);
    const bg_name = req?.file?.filename || data.background_image;

    if (req?.file?.filename) {
      fs.rmSync(`./public/backgroundImages/${data.background_image}`);
    }

    await prisma.templates.update({
      data: {
        name: data.name,
        background_image: bg_name,
        position: JSON.stringify(data.position),
        font: JSON.stringify(data.font),
        hasAuthor: parseInt(data.hasAuthor),
        hasTitle: parseInt(data.hasTitle),
        size: JSON.stringify(data.size),
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
});

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
