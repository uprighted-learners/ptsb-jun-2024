const express = require("express");
const app = express();
const port = 4000;

// http://localhost:4000/
app.get("/", (req, res) => {
  res.send(":) :) :) :)");
  console.log("we just hit the root route");
});

// these are examples of more routes
// but they're actually replaced by the next two

// app.get("/food/beans", (req, res) => {
//   res.send("I love beans");
// });

// app.get("/food/beans/hello", (req, res) => {
//   res.send("Hello, did I mention I love beans?");
// });

app.get("/food/:favFood/", (req, res) => {
  console.log(req.params); // { favFood: 'tiramisu' }
  res.send(`I love ${req.params.favFood}`);
});

app.get("/food/:favFood/hello", (req, res) => {
  res.send(`Hello, did I mention I love ${req.params.favFood}?`);
});

// these two are routes with the same URL, but different HTTP methods
// remember we can only use the browser to make GET requests
// we'd have to make POST requests another way
app.get("/post", (req, res) => {
  res.send("you made a get request to the post address!");
});

app.post("/post", (req, res) => {
  res.send("you made a post somehow!");
});

// the app.listen() function runs at the beginning when the app starts
// it sets up a "listener" that is ready to receive requests to the given port
app.listen(port, () => {
  console.log(`listening in port ${port}`);
});
