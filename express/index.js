const express = require("express");
const handlebars = require("hbs");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "hbs");
const port = 8000;
var task = [];

//Adding Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Alowing Cross domain Request
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/api/data", (req, res) => {
  console.log("Endpoint trigred");
  res.json(task);
});

app.post("/api/task", (req, res) => {
  const { text } = req.body;
  task.push(text);
  console.log(task);
  return res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.log(`Sever is running on port ${port}`);
});
