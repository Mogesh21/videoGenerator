import express from "express";
import { PrismaClient } from "../prisma/generated/client1/index.js";

const prisma = new PrismaClient();

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await prisma.settings.findFirst({
    select: {
      id: true,
      font_style: true,
      title_size: true,
      title_color: true,
      title_style: true,
      content_size: true,
      content_color: true,
      content_style: true,
      credit_size: true,
      credit_color: true,
      credit_style: true,
    },
    where: {
      id: 1,
    },
  });

  res.status(200).json(data);
});

router.post("/update", async (req, res) => {
  try {
    const {
      font_style,
      title_size,
      title_color,
      title_style,
      content_color,
      content_size,
      content_style,
      credit_size,
      credit_color,
      credit_style,
    } = req.body;

    const data = await prisma.settings.upsert({
      where: {
        id: 1,
      },
      update: {
        font_style: font_style,
        title_size: parseInt(title_size),
        title_color: title_color,
        title_style: title_style,
        content_size: parseInt(content_size),
        content_color: content_color,
        content_style: content_style,
        credit_size: parseInt(credit_size),
        credit_color: credit_color,
        credit_style: credit_style,
      },
      create: {
        font_style: font_style,
        title_size: parseInt(title_size),
        title_color: title_color,
        title_style: title_style,
        content_size: parseInt(content_size),
        content_color: content_color,
        content_style: content_style,
        credit_size: parseInt(credit_size),
        credit_color: credit_color,
        credit_style: credit_style,
      },
    });

    res.status(200).json({ message: "success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err, message: "Internal Server Error" });
  }
});

export default router;
