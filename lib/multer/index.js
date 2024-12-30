import multer from "multer";
import path from "node:path";
import crypto from "node:crypto";
import fs from "node:fs/promises";

let folderId = [];
const storage = multer.diskStorage({
  destination: async function (req, file, cb) {
    try {
      const uploadFolderId = crypto.randomBytes(5).toString("hex");
      folderId.push(uploadFolderId);
      await fs.mkdir(`./storage/${uploadFolderId}`);
      cb(null, path.resolve(`./storage/${uploadFolderId}`));
      req.folderId = folderId;
    } catch (err) {
      console.log("error from multerStorage ", err);
    }
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export { storage };
