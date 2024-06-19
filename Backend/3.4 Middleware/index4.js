import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const streetName = req.body.street;
  const petName = req.body.pet;
  res.send(
    "<h1> Your band name is</h1>" +
      "<br>" +
      "<h2>" +
      streetName +
      petName +
      "</h2>"
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
