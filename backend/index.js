import express from "express";
import ffmpeg from "fluent-ffmpeg";
import { configDotenv } from "dotenv";
import path from "path";
import cors from "cors";
import Projects from "./routes/projects.js";
import Videos from "./routes/videos.js";
// import Make from "./routes/make.js";
// import Templates from "./routes/templates.js";
import Fonts from "./routes/fonts.js";

ffmpeg.setFfmpegPath(`${process.cwd()}/ffmpeg/bin/ffmpeg.exe`);
configDotenv();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
app.use("/font", express.static("font"));

app.use("/projects", Projects);
// app.use("/make", Make);
// app.use("/templates", Templates);
app.use("/fonts", Fonts);

app.use("/videos", Videos);

app.get("/req", (req, res) => {
  res.sendFile(path.join(process.cwd(), "sample.html"));
});

app.listen(8080, (err) => {
  if (err) console.log(err);
  else console.log("Server running @", process.env.SERVER_ADDRESS);
});
