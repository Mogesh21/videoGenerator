import express from "express";
import fs from "fs";
import { PrismaClient } from "../prisma/generated/client1/index.js";
import path from "path";
import multer from "multer";

const router = express.Router();
const prisma = new PrismaClient();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = `./font`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const data = JSON.parse(req.body.data);
    cb(null, data.name + path.extname(file.originalname));
  },
});

const fontStore = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post("/add", fontStore.single("font"), async (req, res) => {
  try {
    const { name } = JSON.parse(req.body.data);
    const filename = req.file?.originalname;
    await prisma.fonts.create({
      data: {
        name: name,
        file_name: filename,
      },
    });
    res.status(201).json({ message: "Font added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await prisma.fonts.findMany();
    res.status(200).json({ data: data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Unable to get data" });
  }
});

router.put("/edit", fontStore.single("font"), async (req, res) => {
  try {
    const { id } = JSON.parse(req.body.data);
    const filename = req.file?.originalname;
    await prisma.fonts.update({
      data: {
        file_name: filename,
      },
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "Font updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Unable to update data" });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const { id, name } = req.query;
    await prisma.fonts.delete({
      where: {
        id: parseInt(id),
      },
    });
    fs.rmSync(path.join(process.cwd(), "font", `${name}.ttf`));
    res.status(200).json({ message: "Font deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Unable to delete" });
  }
});

export default router;
