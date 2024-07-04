const express = require("express");

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Welcome to the express");
});

app.listen(port, () => {
  console.log(`Sever is running on port ${port}`);
});
