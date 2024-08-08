const express = require("express");
const app = express();

const PORT = 4000;

// this middleware encodes submitted data in a readable way
app.use(express.urlencoded({ extended: true }));

// a single slash is the "root"
// all route urls must start with a slash
app.get("/", (req, res) => {
  res.send("this is the root");
});

// the first argument is the path
// the path part of the url is everything following the top-level-domain
// or, when developing locally, everything following the host:port
app.get("/about", (req, res) => {
  res.send("this is the about page, its address is hard-coded");
});

// always prefix routes that include url parameters with something hard-coded
// to prevent accidentally catching other routes
app.get("/name/:firstName/:lastName", (req, res) => {
  res.send(`Nice to meet you ${req.params.firstName} ${req.params.lastName}`);
});

// we can also use query strings to pass information from the url
app.get("/name", (req, res) => {
  // localhost:4000/name?anyKey=anyValue&lastName=Burrow&firstName=Danny
  console.log(req.query);
  res.send(`Nice to meet you ${req.query.firstName} ${req.query.lastName}`);
});

// this middelware line lets us parse the request body as JSON
app.use(express.json());
// there's another middleware (at the top) that lets us encode form data
app.post("/name", (req, res) => {
  console.log(req.body);
  res.send(
    `${req.body.firstName} ${req.body.lastName} saved to DB (for pretend)`
  );
});

app.get("/input", (req, res) => {
  // we can send raw HTML in the response and it will be rendered!
  // if we hit this address in the browser (not postman)
  // we'll see it and be able to use it :)
  res.send(`
    <form method="post" action="/name">
      <input type="text" name="firstName" placeholder="first name">
      <input type="text" name="lastName" placeholder="last name">
      <input type="submit" value="Click me">
    </form>
    `);
});

app.get("/color", (req, res) => {
  console.log(req.query);
  // when we hit this endpoint with a color hex code as a query parameter
  // the background color is set to that hex code
  res.send(`
    <body style="background-color:${req.query.bgColor}">
      <form method="get" action="/color">
        <input type="color" name="bgColor" value=${req.query.bgColor}>
        <button type="submit">Click me</button>
      </form>
    </body>
    `);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
