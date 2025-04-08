import express from "express";
import axios from "axios";
import { JSDOM } from "jsdom";
import path from "path";
import createVideo from "../functions/createVideo.js";
import createThumbnail from "../functions/createThumbnail.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const { section_id, id, bgvideo, bgImage, font1, positions1, size1, duration1 } = req.body;

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
    const dom = new JSDOM(result.data[id].question);
    const document = dom.window.document;
    const text = [...document.querySelectorAll("p")].map((p) => p.textContent);
    const text2 = [...document.querySelectorAll("div")].map((div) => div.textContent);
    const images = [...document.querySelectorAll("img")].map((img) => img.src);
    const options = [
      result.data[id].option_1,
      result.data[id].option_2,
      result.data[id].option_3,
      result.data[id].option_4,
      result.data[id].option_5,
      result.data[id].option_6,
    ];

    const answer = result.data[id].answer;

    const backgroundImagePath =
      "E:/Mogesh/Projects/interviewbix_videos/backend/public/templates/thumbimage.png";
    const backgroundPath =
      "E:/Mogesh/Projects/interviewbix_videos/backend/functions/public/temp/bg.mp4";
    const introPath =
      "E:/Mogesh/Projects/interviewbix_videos/backend/functions/public/temp/intro.mp4";
    const outroPath =
      "E:/Mogesh/Projects/interviewbix_videos/backend/functions/public/temp/outro.mp4";
    const audioPath =
      "E:/Mogesh/Projects/interviewbix_videos/backend/functions/public/temp/audio.mp3";
    const outputPath = "E:/Mogesh/Projects/interviewbix_videos/backend/public/output.mp4";
    const thumbnail = path.join(process.cwd(), "public", "images", "0", "thumbnail.png");

    const content = {
      text: [...text, ...text2],
      images: images,
      options: options,
      answer: answer,
    };

    const font = {
      style: "SuperShiny",
      content: {
        size: 48,
        animation: "bounce",
        color: "#d10dd5",
        bgColor: "#b7df18",
        align: "center",
        width: 800,
        lineHeight: 10,
        italic: 0,
        bold: 1,
      },
      options: {
        size: 40,
        animation: "fade",
        color: "#ffffff",
        answerColor: "#ff630f",
        bgColor: "#b7df18",
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

    const positions = {
      content: {
        x: 140,
        y: 400,
      },
      options: {
        x: 100,
        y: 1100,
      },
    };

    const duration = {
      total: 10,
      intro: 5,
      outro: 5,
      timer: 5,
    };

    const size = { width: 1080, height: 1920 };

    const [newImages, wrappedQuestion, wrappedOptions, optionPosition, optionLength] =
      await createThumbnail({
        backgroundImagePath,
        content,
        positions,
        font,
        size,
      });

    content.images = newImages;
    content.text = wrappedQuestion;
    content.options = wrappedOptions;
    content.optionPosition = optionPosition;
    content.optionLength = optionLength;

    await createVideo({
      content: content,
      thumbnailPath: thumbnail,
      introPath: introPath,
      outroPath: outroPath,
      backgroundVideoPath: backgroundPath,
      audioUrl: audioPath,
      outputPath: outputPath,
      fontSettings: font,
      positions: positions,
      size: size,
      duration: duration,
    });

    res.status(200).json({ text: [...text, ...text2], images, options, data: result.data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
