import express from "express";
import crypto from "node:crypto";
import path from "node:path";
import fs from "node:fs/promises";
import multer from "multer";
import { storage } from "../multer/index.js";

const router = express.Router();

const upload = multer({ storage });

router.post("/upload-files", upload.array("file"), async (req, res) => {
  // const { file } = req.body;
  console.log("file ", req.file);
  console.log("files ", req.files);
  // const stat = file.split(".");
  // const filename = stat[0];
  // const extension = stat[1];

  // const folderId = crypto.randomBytes(10).toString("hex");

  // try {
  //   await fs.mkdir(`./storage/${folderId}`);
  //   const fullFilePath = `./storage/${folderId}/${filename}.${extension}`;

  //   const fileHandler = await fs.open(fullFilePath, "w");
  //   const stream = fileHandler.createWriteStream();

  //   req.on("data", (chunk) => console.log(chunk));
  //   req.pipe(stream).on("finish", async () => {
  //     await fileHandler.close();

  //     res.status(200).json({ msg: "success" });
  //   });
  // } catch (error) {
  //   console.log("error ", error);
  // }

  res.send(req.file);
});
export { router };
