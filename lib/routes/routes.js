import express from "express";
import multer from "multer";
import { storage } from "../multer/index.js";
import { pool } from "../db/database.js";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const upload = multer({ storage });

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", upload.array("file"), async (req, res) => {
  let filename, mimetype, size, i, folderId;
  for (const file of req.files) {
    filename = file.originalname;
    mimetype = file.mimetype;
    size = file.size;
    folderId = req.folderId[i];
    i++;
  }

  try {
    pool.update();
    pool.files.push({
      id: uuidv4(),
      filename,
      mimetype,
      size,
      folderId,
    });
    pool.save();
  } catch (err) {
    res.status(500).redirect("/");
  }
});
export { router };
