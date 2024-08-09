const express = require("express");
const app = express();
const PORT = 4000;

// this built-in middleware serves all of the files
// at the given path to the root
app.use(express.static("static"));

// this one doesn't even work anymore
// when static files are served to the home instead
// app.get("/", (req, res) => {
//   res.send("<h1>hi</h1>");
// });

const path = require("path");

app.get("/two", (req, res) => {
  // res.sendFile(__dirname + "/static/page2.html");
  res.sendFile(path.join(__dirname, "/static/page2.html"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
