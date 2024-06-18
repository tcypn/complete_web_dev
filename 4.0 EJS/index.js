import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  const date = new Date();
  const dateNumber = date.getDay();

  let dayType = "a weekday";
  let advice = "it's time to work hard";
  if (dateNumber === 0 || dateNumber === 6) {
    dayType = "a weekend";
    advice = "it's time to have fun";
  }
  res.render(__dirname + "/views/index.ejs", {
    dayType: dayType,
    advice: advice,
  });
});

app.listen(port, (req, res) => {
  console.log("Listening to port 3000");
});
