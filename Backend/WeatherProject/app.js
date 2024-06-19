const express = require("express");

const https = require("https");

const app = express();

app.get("/", function (req, res) {
  // res.sendFile(__dirname + "/index.html");
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=759950c9114e98002270bb46eeaee888&units=metric";
  https.get(url, function (response) {
    console.log(response);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      console.log(temp);
      console.log(weatherDescription);
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
