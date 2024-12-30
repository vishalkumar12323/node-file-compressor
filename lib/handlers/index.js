import { pool } from "../db/database.js";
import { v4 as uuidv4 } from "uuid";

const getFiles = async (req, res) => {
  try {
    pool.update();
    const files = pool.files.map((file) => file);
    if (files.length === 0) {
      res.render("index");
    }
    res.render("index", { files });
  } catch (err) {
    res.status(500).redirect("/");
  }
};
const uploadFiles = async (req, res) => {
  try {
    pool.update();
    req.files.forEach((file, idx) => {
      pool.files.push({
        id: uuidv4(),
        name: file.originalname,
        size: file.size,
        mimetype: file.mimetype,
        folderId: req.folderId[idx],
      });
    });
    pool.save();
    res.redirect("/");
  } catch (err) {
    res.status(500).redirect("/");
  }
};

export { getFiles, uploadFiles };
