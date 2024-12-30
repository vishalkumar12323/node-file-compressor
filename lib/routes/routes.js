import express from "express";
import multer from "multer";
import { storage } from "../multer/index.js";

const router = express.Router();

const upload = multer({ storage });

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/upload-files", upload.array("file"), async (req, res) => {
  try {
    res.redirect("/");
  } catch (err) {
    res.status(500).redirect("/");
  }
});
export { router };
