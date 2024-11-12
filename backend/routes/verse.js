import express from "express";
import { PrismaClient } from "../prisma/generated/client1/index.js";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/books", async (req, res) => {
  try {
    const data = await prisma.book_sec.findMany();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/verse", async (req, res) => {
  const { bookId } = req.body;
  if (bookId) {
    const data = await prisma.verse_sec.findMany({
      where: {
        book_num: bookId,
      },
    });
    res.status(200).json(data);
  }
});

router.get("/verse", async (req, res) => {
  try {
    const { bookid } = req.headers;
    const data = await prisma.verse_sec.findMany({
      where: {
        book_num: parseInt(bookid),
      },
    });

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
