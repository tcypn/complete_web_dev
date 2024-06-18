const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.number1);
  var num2 = Number(req.body.number2);

  const result = num1 + num2;
  res.send(`the result is ${result}`);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  const bmi = weight / (height / 100) ** 2;
  res.send(`Your BMI is ${bmi}`);
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
