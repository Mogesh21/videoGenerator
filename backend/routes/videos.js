import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import VideoGenerator from "../functions/generateVideo.js";
import Jimp from "jimp";
import { PrismaClient } from "../prisma/generated/client1/index.js";

const prisma = new PrismaClient();

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/videos/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "" + Math.floor(Math.random() * 1000) + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
});

const deleteImageFile = async (file) => {
  try {
    const oldImagePath = path.join(process.cwd(), "public/videos", file);
    fs.unlink(oldImagePath, (unlinkErr) => {
      if (unlinkErr) {
        console.error("Error deleting old image:", unlinkErr);
      } else {
        console.log("Old image deleted:", oldImagePath);
      }
    });
  } catch (error) {
    console.error("Error deleting file:", error);
    throw error;
  }
};

const resizeMultipleImages = async (req, res, next) => {
  const processFile = async (file, width, height) => {
    const imagePath = path.join(process.cwd(), "public", "videos", file.filename);

    try {
      const image = await Jimp.read(imagePath);

      // Resize and use writeAsync instead of write
      await image.resize(width, height).writeAsync(imagePath);
    } catch (err) {
      console.error("Error resizing image:", err);
      throw new Error("Try again with another image");
    }
  };

  try {
    const firstImage = await Jimp.read(
      path.join(process.cwd(), "public", "videos", req.files.image[0].filename)
    );

    const width = firstImage.bitmap.width > 225 ? firstImage.bitmap.width : 226;
    const height = firstImage.bitmap.height > 225 ? firstImage.bitmap.height : 226;

    for (let i = 0; i < req.files.image.length; i++) {
      await processFile(req.files.image[i], width, height);
    }
    next();
  } catch (err) {
    console.error("Error processing images:", err);
    res.status(500).json("Image processing failed");
  }
};

router.get("/", async (req, res) => {
  try {
    const data = await prisma.videos.findMany({
      select: {
        id: true,
        name: true,
        title: true,
        created_at: true,
      },
      where: {
        is_deleted: 0,
        deleted_at: null,
      },
    });

    const formattedData = data.map((val) => {
      const options = { year: "2-digit", month: "short", day: "2-digit" };
      const formattedDate = val.created_at
        .toLocaleDateString("en-GB", options)
        .replace(",", "")
        .toUpperCase();

      return {
        ...val,
        created: formattedDate,
      };
    });

    res.status(200).json(formattedData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/lastId", async (req, res) => {
  try {
    const lastRecord = await prisma.projects.findFirst({
      orderBy: {
        id: "desc",
      },
      where: {
        is_deleted: 0,
        deleted_at: null,
      },
    });

    res.status(200).json({ id: lastRecord ? lastRecord.id + 1 : 0 });
  } catch (err) {
    res.status(500).json({ err: err, message: "Internal Server Error" });
  }
});

router.post(
  "/create",
  upload.fields([{ name: "image" }, { name: "audio" }]),
  resizeMultipleImages,
  async (req, res) => {
    try {
      const values = JSON.parse(req.body.Values);
      const title = req.body.title;

      const audio = path.join(process.cwd(), "public", "videos", req.files.audio[0].filename);

      const files = req.files.image.map((val) =>
        path.join(process.cwd(), "public", "videos", val.filename)
      );

      const video = await VideoGenerator(audio, files, values);

      const response = await prisma.videos.create({
        data: {
          title: title,
          name: video,
        },
      });

      if (response) {
        res.status(200).json({ video: `${process.env.SERVER_ADDRESS}/public/videos/${video}` });
      } else {
        fs.unlinkSync(`${process.env.SERVER_ADDRESS}/public/videos/${video}`);
        res.status(500).json({ message: "Internal Server Error" });
      }
    } catch (err) {
      console.error("Error in /create:", err);
      res.status(500).json({ error: err, message: "Error" });
      req.files.image.map(async (val) => await deleteImageFile(val.filename));
    } finally {
      await deleteImageFile(req.files.audio[0].filename);
    }
  }
);

router.delete("/delete", async (req, res) => {
  try {
    const { id, projectid, name, length } = req.headers;
    const deleteOp = await prisma.videos.delete({
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

        fs.rmdirSync(path.join(process.cwd(), "public", "videos", projectid), { recursive: true });
      } else {
        fs.unlinkSync(path.join(process.cwd(), "public", "videos", projectid, name));
      }
      res.status(200).json({ message: "success" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/deleteVideos", async (req, res) => {
  try {
    const { ids, names, titleid, allvideos } = JSON.parse(req.headers.data);
    let deleteOp;
    if (ids.length > 1) {
      deleteOp = await prisma.videos.deleteMany({
        where: {
          id: {
            in: ids,
          },
        },
      });
    } else {
      deleteOp = await prisma.videos.delete({
        where: {
          id: ids[0],
        },
      });
    }
    if (deleteOp) {
      if (allvideos) {
        await prisma.projects.delete({
          where: {
            id: titleid,
          },
        });

        fs.rmSync(path.join(process.cwd(), "public", "videos", titleid.toString()), {
          recursive: true,
          force: true,
        });
      } else {
        names.forEach((name) =>
          fs.unlinkSync(path.join(process.cwd(), "public", "videos", titleid.toString(), name))
        );
      }
      res.status(200).json({ message: "success" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", error: err });
  }
});

export default router;
