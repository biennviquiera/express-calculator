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

app.listen(port, () => {
  console.log("Server started on port " + port);
})
