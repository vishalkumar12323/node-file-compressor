import fs from "fs";

const filesPath = "./data/files";
class Database {
  constructor() {
    this.files = JSON.parse(fs.readFileSync(filesPath, "utf-8"));
  }

  update() {
    this.files = JSON.parse(fs.readFileSync(filesPath, "utf-8"));
  }

  save() {
    fs.writeFileSync(filesPath, JSON.stringify(this.files));
  }
}

const pool = new Database();
export { pool };
