import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 8080;

// setting up static files serve
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// setting up view engines (ejs)
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () =>
  console.log(`listening on url: http://localhost:${port}`)
);
