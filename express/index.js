const express = require("express");
const handlebars = require("hbs");

const app = express();
app.set("view engine", "hbs");
const port = 8000;

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.log(`Sever is running on port ${port}`);
});
