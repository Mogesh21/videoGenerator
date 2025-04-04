import express from "express";
import axios from "axios";
import { JSDOM } from "jsdom";
import path from "path";
import createVideo from "../functions/createVideo.js";
import createThumbnail from "../functions/createThumbnail.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const { section_id, bgvideo, bgImage, font1, positions1, size } = req.body;

    const response = await axios.post(
      "https://interviewbix.com/api/question-list",
      { section_id: section_id },

      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const result = response.data;
    const dom = new JSDOM(result.data[3].question);
    const document = dom.window.document;
    const text = [...document.querySelectorAll("p")].map((p) => p.textContent);
    const text2 = [...document.querySelectorAll("div")].map((div) => div.textContent);
    const images = [...document.querySelectorAll("img")].map((img) => img.src);
    const options = [
      result.data[3].option_1,
      result.data[3].option_2,
      result.data[3].option_3,
      result.data[3].option_4,
      result.data[3].option_5,
      result.data[3].option_6,
    ];

    const backgroundPath = path.join(process.cwd(), "public", "templates", "thumbimage.png");

    const content = {
      text: [...text, ...text2],
      images: images,
      options: options,
    };

    let font = {
      style: "SuperShiny",
      content: {
        size: 48,
        color: "green",
        align: "center",
        width: 800,
        lineHeight: 10,
        italic: 0,
        bold: 1,
      },
      options: {
        size: 40,
        color: "orange",
        align: "center",
        width: 880,
        lineHeight: 10,
        italic: 1,
        bold: 0,
      },
      image: {
        width: 400,
        height: 400,
      },
    };

    let positions = {
      content: {
        x: 140,
        y: 400,
      },
      options: [
        {
          x: 100,
          y: 1100,
        },
        {
          x: 100,
          y: 1200,
        },
        {
          x: 100,
          y: 1300,
        },
        {
          x: 100,
          y: 1400,
        },
      ],
    };

    await createThumbnail({
      backgroundPath,
      content,
      positions,
      font,
      size,
    });

    const thumbnail = path.join(process.cwd(), "public", "images", "0", "thumbnail.png");
    // const video = await createVideo({
    //   text,
    //   images,
    //   bgvideo,
    //   font,
    //   positions,
    //   size,
    // });

    res.status(200).json({ text: [...text, ...text2], images, options });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
