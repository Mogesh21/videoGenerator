import express from "express";
import { PrismaClient } from "../prisma/generated/client1/index.js";

const prisma = new PrismaClient();

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await prisma.settings.findFirst({
    select: {
      id: true,
      title_size: true,
      title_color: true,
      content_size: true,
      content_color: true,
      credit_size: true,
      credit_color: true,
    },
    where: {
      id: 1,
    },
  });

  res.status(200).json(data);
});

router.post("/update", async (req, res) => {
  try {
    const { title_size, title_color, content_color, content_size, credit_size, credit_color } =
      req.body;

    const data = await prisma.settings.upsert({
      where: {
        id: 1,
      },
      update: {
        title_size: title_size,
        title_color: title_color,
        content_size: content_size,
        content_color: content_color,
        credit_size: credit_size,
        credit_color: credit_color,
      },
      create: {
        title_size: title_size,
        title_color: title_color,
        content_size: content_size,
        content_color: content_color,
        credit_size: credit_size,
        credit_color: credit_color,
      },
    });

    res.status(200).json({ message: "success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err, message: "Internal Server Error" });
  }
});

export default router;
