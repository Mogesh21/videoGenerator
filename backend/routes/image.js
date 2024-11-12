import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { PrismaClient } from "../prisma/generated/client1/index.js";
import generateImages from "../functions/generateImage.js";

const router = express.Router();
const prisma = new PrismaClient();

const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = `./public/images/${req.body.id}`;
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

router.get("/lastId", async (req, res) => {
  try {
    const lastRecord = await prisma.projects.findFirst({
      orderBy: {
        id: "desc",
      },
    });

    res.status(200).json({ id: lastRecord ? lastRecord.id + 1 : 0 });
  } catch (err) {
    res.status(500).json({ err: err, message: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await prisma.projects.findMany({
      select: {
        id: true,
        title: true,
        author: true,
        created_at: true,
        images: {
          select: {
            name: true,
          },
          where: {
            is_deleted: 0,
          },
        },
      },
      where: {
        is_deleted: 0,
      },
    });

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err, message: "Internal Server Error" });
  }
});

router.post("/add", images.single("background_image"), async (req, res) => {
  try {
    const name = JSON.parse(req.body.name) || "";
    const title = JSON.parse(req.body.title) || "";
    const content = JSON.parse(req.body.content) || "";
    const author = JSON.parse(req.body.author) || "";
    const size = JSON.parse(req.body.size) || "";
    const verseType = JSON.parse(req.body.versetype);
    const bg = req.file.filename;

    const addProject = await prisma.projects.create({
      data: {
        name: name,
      },
    });

    const ProjectId = addProject.id;
    const bgPath = path.join(process.cwd(), "public", "images", ProjectId.toString(), bg);

    const images = await generateImages(bgPath, title, content, author, ProjectId, size, verseType);

    images.forEach(async (name) => {
      await prisma.images.create({
        data: {
          name: name,
          title_id: ProjectId,
        },
      });
    });

    res.status(200).json({ images, id: ProjectId });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Unable to create Images" });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const { id, projectid, name, length } = req.headers;
    const deleteOp = await prisma.images.delete({
      where: {
        id: parseInt(id),
      },
    });
    if (deleteOp) {
      if (parseInt(length) === 1) {
        await prisma.projects.update({
          data: {
            is_deleted: 1,
          },
          where: {
            id: parseInt(projectid),
          },
        });

        fs.rmdirSync(path.join(process.cwd(), "public", "images", projectid), { recursive: true });
      } else {
        fs.unlinkSync(path.join(process.cwd(), "public", "images", projectid, name));
      }
      res.status(200).json({ message: "success" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
