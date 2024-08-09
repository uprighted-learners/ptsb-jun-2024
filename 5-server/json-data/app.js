/* 
    ? CRUD operations
    * Create // POST
    * Read // GET
    * Update // PUT
    * Delete // DELETE
*/

const express = require("express");
const app = express();
const fs = require("fs");

const PORT = 4000;
const BOOK_PATH = __dirname + "/static/books.json";

app.use(express.json());

app.get("/books", (req, res) => {
  res.sendFile(BOOK_PATH);
});

app.get("/books/:bookId", (req, res) => {
  // read file
  const data = fs.readFileSync(BOOK_PATH);
  // parse JSON into JS object
  const parsedData = JSON.parse(data);
  // find the book with the id we're looking for
  const id = req.params.bookId;
  const book = parsedData.books.find((book) => book.id == id);

  res.send(book);
});

const getNewId = () => {
  const data = fs.readFileSync(BOOK_PATH);
  const parsedData = JSON.parse(data);
  const lastBook = parsedData.books[parsedData.books.length - 1];
  return lastBook.id + 1;
};

app.post("/books", (req, res) => {
  // HTTP POST is for sending new information from client to server

  // to save new data...
  // open/read the JSON file
  const data = fs.readFileSync(BOOK_PATH);
  // parse JSON into JS object
  const parsedData = JSON.parse(data);
  // add new entry
  if (req.body.title && req.body.author) {
    parsedData.books.push({
      id: getNewId(),
      author: req.body.author,
      title: req.body.title,
    });
  }
  // save it to file
  // JSON.stringify turns our JS object back into JSON
  fs.writeFileSync(BOOK_PATH, JSON.stringify(parsedData));

  res.send("new book successfully added");
});

app.put("/books/:bookId", (req, res) => {
  // HTTP PUT is also for sending data from client to server
  // PUT requests should be idempotent
  // idempotency means performing the same operation multiple times
  // will not result in duplicated data
  // it will only make a change if there is a change to make

  // read file
  const data = fs.readFileSync(BOOK_PATH);
  // parse JSON into JS object
  const parsedData = JSON.parse(data);
  // find the book with the id we're looking for
  const id = req.params.bookId;
  const book = parsedData.books.find((book) => book.id == id);

  // find the book's index
  const index = parsedData.books.indexOf(book);
  if (req.body.title && req.body.author) {
    parsedData.books[index] = {
      id: book.id,
      author: req.body.author,
      title: req.body.title,
    };
  }
  // save it to file
  fs.writeFileSync(BOOK_PATH, JSON.stringify(parsedData));
  res.send("book successfully updated");
});

// TODO: author/title search
// TODO: delete a book

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
