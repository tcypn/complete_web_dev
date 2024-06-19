const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>YO</h1>");
});

app.get("/contact", function (req, res) {
  res.send("contact me at chayabhorn.g@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("My name is Tone. I love music, and i like cats");
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
