import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "successfully loaded." });
});

app.listen(port, () =>
  console.log(`listening on url: http://localhost:${port}`)
);
