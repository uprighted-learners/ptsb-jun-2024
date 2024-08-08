const express = require("express");
const app = express();
const PORT = 4000;

// middlewares intervene in the call stack
// they inject logic of our choice into the request-response cycle

// a middleware is just a normal function with the params:
// req, res, next
// next refers to the next function in the call stack
// we must explicity call it to move out of this function
const logTime = (req, res, next) => {
  const now = new Date().toLocaleTimeString();
  console.log(`This call was made at ${now}`);
  next();
};

const logBeansTime = (req, res, next) => {
  if (req.url === "/kidney") {
    console.log("The time for kidney beans is NEVER");
  } else {
    const now = new Date().toLocaleTimeString();
    console.log(`The time for beans is ${now}`);
  }
  next();
};

// app.use() takes the function object and applies it to all routes
app.use(logTime);
// or we can limit the routes that the function will apply to
app.use("/beans", logBeansTime);

app.get("/", (req, res) => {
  res.send("wheee!");
});

app.get("/beans", (req, res) => {
  res.send("beans!!!!");
});

app.get("/beans/:bestBean", (req, res) => {
  res.send(`The best bean is ${req.params.bestBean}`);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
