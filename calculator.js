const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post('/', (req, res) => {
  res.send("The result is " + (Number(req.body.num1) + Number(req.body.num2)));
})

app.get('/bmi', (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post('/bmi', (req, res) => {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);
  res.send("Your BMI is " + bmi);
})

app.listen(port, () => {
  console.log("Server started on port " + port);
})
