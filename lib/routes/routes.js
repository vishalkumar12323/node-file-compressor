import express from "express";
import multer from "multer";
import { storage } from "../multer/index.js";
import { pool } from "../db/database.js";

const router = express.Router();

const upload = multer({ storage });

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", upload.array("file"), async (req, res) => {
  const [] = req.files.map((file, idx) => {
    return {
      filename: file.originalname,
      size: file.size,
      mimetype: file.mimetype,
      folderId: req.folderId[idx],
    };
  });

  console.log(fileStat);
  try {
    res.render("index.ejs", { files: req.files });
  } catch (err) {
    res.status(500).redirect("/");
  }
});
export { router };
