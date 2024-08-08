const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/:name/:id", (req, res) => {
  const name = req.params.name;
  const id = req.params.id;
  let nameLength = name.length;
  res.send(`Your name is ${nameLength} characters long. Your id is ${id}`);
});

app.listen(port, () => {
  console.log(":)");
});
