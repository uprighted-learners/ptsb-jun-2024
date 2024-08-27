const express = require("express")
const router = express.Router()
const Book = require("../model/Book")

// get all
router.get("/", async (req, res) => {
  const books = await Book.find()
  res.json(books)
})

router.get("/find/:bookId", async (req, res) => {
  // TODO: add error handling
  const book = await Book.findOne({ _id: req.params.bookId })
  res.json(book)
})

router.post("/add", async (req, res) => {
  const newBook = new Book(req.body)
  await newBook.save()
  res.send("book added")
})

module.exports = router
