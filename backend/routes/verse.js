import express from "express";
import makeVideo from "../functions/makeVideo.js";
import { PrismaClient as PrismaClient1 } from "../prisma/generated/client1/index.js";
import { PrismaClient as PrismaClient2 } from "../prisma/generated/client2/index.js";

const router = express.Router();
const db1 = new PrismaClient1();
const db2 = new PrismaClient2();

router.get("/books", async (req, res) => {
  try {
    const data = await db1.book_sec.findMany();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/verse", async (req, res) => {
  const { bookId } = req.body;
  if (bookId) {
    const data = await db1.verse_sec.findMany({
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
    const data = await db1.verse_sec.findMany({
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

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const fileData = data.fileData;

    const verseData = [];
    for (const val of fileData) {
      const version_id = val[1];
      const book_id = val[2] - 1;
      const chapter_num = val[3] - 1;
      const verse_num = val[4] - 1;
      const verseTable = "record" + version_id;

      const book = await db2.books.findFirst({
        select: {
          id: true,
          book_num: true,
          title: true,
          total_chap_count: true,
        },
        where: {
          version_id: parseInt(version_id),
          book_num: book_id.toString(),
        },
      });

      if (!book) continue;

      const verses = await db2[verseTable].findFirst({
        select: {
          book_num: true,
          content: true,
        },
        where: {
          chapter_num: chapter_num.toString(),
          verse_num: verse_num.toString(),
          book_num: book.book_num,
        },
      });

      verseData.push({
        audioUrl: val[0],
        title: book.title,
        content: verses?.content || "",
        chapter_num: val[2],
        verse_num: val[3],
        startTime: val[5],
        duration: val[6],
        videoUrl: "",
      });
    }

    makeVideo(
      verseData,
      data.id,
      data.project_name,
      data.font,
      data.position,
      data.hasTitle,
      data.hasAuthor,
      data.type,
      data.size
    );
    res.status(200).json(data);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
