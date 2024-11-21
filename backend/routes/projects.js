import express from "express";
import fs from "fs";
import { PrismaClient } from "../prisma/generated/client1/index.js";
import path from "path";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/images", async (req, res) => {
  try {
    const data = await prisma.projects.findMany({
      select: {
        id: true,
        name: true,
        title: true,
        author: true,
        created_at: true,
        images: {
          select: {
            id: true,
            title_id: true,
            name: true,
            created_at: true,
          },
        },
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
        created_at: formattedDate,
        images: val.images.map((img) => {
          const formattedDate = img.created_at
            .toLocaleDateString("en-GB", options)
            .replace(",", "")
            .toUpperCase();
          return {
            ...img,
            created_at: formattedDate,
          };
        }),
      };
    });

    res.status(200).json(formattedData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/videos", async (req, res) => {
  try {
    const data = await prisma.projects.findMany({
      select: {
        id: true,
        name: true,
        title: true,
        author: true,
        created_at: true,
        videos: {
          select: {
            id: true,
            title_id: true,
            name: true,
            created_at: true,
          },
        },
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
        created_at: formattedDate,
        videos: val.videos.map((vid) => {
          const formattedDate = vid.created_at
            .toLocaleDateString("en-GB", options)
            .replace(",", "")
            .toUpperCase();

          return {
            ...vid,
            created_at: formattedDate,
          };
        }),
      };
    });

    res.status(200).json(formattedData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/deleteVideo", async (req, res) => {
  try {
    const { ids } = JSON.parse(req.headers.data);
    ids.forEach((id) => {
      console.log(id, path.join(process.cwd(), "public", "videos", id.toString()));
      fs.rmSync(path.join(process.cwd(), "public", "videos", id.toString()), {
        recursive: true,
        force: true, 
      });
    });

    if (ids.length > 1) {
      const videosResult = await prisma.videos.deleteMany({
        // data: {
        //   is_deleted: 1,
        //   deleted_at: new Date(),
        // },
        where: {
          title_id: {
            in: ids,
          },
        },
      });
      const projectResult = await prisma.projects.deleteMany({
        // data: {
        //   is_deleted: 1,
        //   deleted_at: new Date(),
        // },
        where: {
          id: {
            in: ids,
          },
        },
      });
    } else {
      const videosResult = await prisma.videos.deleteMany({
        // data: {
        //   is_deleted: 1,
        //   deleted_at: new Date(),
        // },
        where: {
          title_id: ids[0],
        },
      });

      const projectResult = await prisma.projects.delete({
        // data: {
        //   is_deleted: 1,
        //   deleted_at: new Date(),
        // },
        where: {
          id: ids[0],
        },
      });
    }

    res.status(200).json({ message: "success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//---------DYNAMIC ROUTES ------------//

router.get("/videos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = await prisma.projects.findFirst({
      select: {
        id: true,
        name: true,
        created_at: true,
        videos: {
          select: {
            id: true,
            title_id: true,
            name: true,
            created_at: true,
          },
        },
      },
      where: {
        id: parseInt(id),
        is_deleted: 0,
        deleted_at: null,
      },
    });

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    const options = { year: "2-digit", month: "short", day: "2-digit" };

    const formattedDate = data.created_at
      .toLocaleDateString("en-GB", options)
      .replace(",", "")
      .toUpperCase();

    const formattedData = {
      ...data,
      created_at: formattedDate,
      videos: data.videos.map((vid) => {
        const formattedDate = vid.created_at
          .toLocaleDateString("en-GB", options)
          .replace(",", "")
          .toUpperCase();

        return {
          ...vid,
          created_at: formattedDate,
        };
      }),
    };

    res.status(200).json(formattedData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = await prisma.projects.findFirst({
      select: {
        id: true,
        name: true,
        title: true,
        author: true,
        created_at: true,
        images: {
          select: {
            id: true,
            title_id: true,
            name: true,
          },
        },
      },
      where: {
        id: parseInt(id),
        is_deleted: 0,
        deleted_at: null,
      },
    });

    console.log(data);
    const formattedData = data.map((val) => {
      const options = { year: "2-digit", month: "short", day: "2-digit" };
      const formattedDate = val.created_at
        .toLocaleDateString("en-GB", options)
        .replace(",", "")
        .toUpperCase();
      return {
        ...val,
        created_at: formattedDate,
        videos: val.videos.map((vid) => {
          const formattedDate = vid.created_at
            .toLocaleDateString("en-GB", options)
            .replace(",", "")
            .toUpperCase();
          return {
            ...vid,
            created_at: formattedDate,
          };
        }),
      };
    });

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json(formattedData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching data" });
  }
});

export default router;
