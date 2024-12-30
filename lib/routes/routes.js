import express from "express";
import multer from "multer";
import { storage } from "../multer/index.js";
import { getFiles, uploadFiles } from "../handlers/index.js";

const router = express.Router();

const upload = multer({ storage });

router.get("/", getFiles);

router.post("/", upload.array("file"), uploadFiles);
export { router };
