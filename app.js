/*===============================
    Require External packages
===============================*/
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

/*===============================
    Configure App
===============================*/
app.use(bodyParser.urlencoded({ extended: true }));

/*===============================
    Handle Get Requests
===============================*/
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.get("/bmi", function (req, res) {
  res.sendFile(__dirname + "/bmi.html");
});
/*===============================
    Handle Post Requests
===============================*/
app.post("/", function (req, res) {
  let num1 = Number(req.body.fnumber);
  let num2 = Number(req.body.lnumber);
  let sum = num1 + num2;
  res.send(`The result is ${sum}`);
});

app.post("/bmi", function (req, res) {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);
  let bmi = weight / (height * height);
  res.send(`Your BMI is ${bmi}`);
});
/*===============================
    Run Server on Port 3000
===============================*/
app.listen(3000, function () {
  console.log("Server is up and running on port 3000");
});
