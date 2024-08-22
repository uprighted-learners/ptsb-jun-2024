const express = require("express")
const router = express.Router()

const { MongoClient, ObjectId } = require("mongodb")
const client = new MongoClient("mongodb://localhost:27017")

// open connection to db server
client.connect()

const dbConnect = async () => {
  try {
    // get the database
    const db = client.db("BooksAPI")
    // get the collection off the database
    const collection = db.collection("books")
    return collection
  } catch (err) {
    console.log("DB connection failed: ", err)
  }
}

router.get("/", async (req, res) => {
  const connect = await dbConnect()
  // create a cursor that finds our specific query
  // when we use .find() with no arguments, it just returns everything
  const allBooks = connect.find()
  // convert cursor into array
  const booksArray = await allBooks.toArray()
  res.send(booksArray)
})

router.get("/find/:bookId", async (req, res) => {
  if (ObjectId.isValid(req.params.bookId)) {
    // query the db to find the matching id
    const book = await connect.findOne({ _id: new ObjectId(req.params.bookId) })
    // ternary operator
    // const result = boolean expression ? result if true : result if false
    book ? res.send(book) : res.status(404).send("Book not found")
    // if (book) {
    //   res.send(book)
    // } else {
    //   res.status(404).send("Book not found")
    // }
  } else {
    res.status(404).send("Invalid book id")
  }
})

router.post("/", async (req, res) => {
  const connect = await dbConnect()
  try {
    if (req.body.title || req.body.author) {
      // insert new document based on request body
      const result = await connect.insertOne({
        title: req.body.title || "untitled",
        author: req.body.author || "unknown author",
      })
      res.send(
        `Book added \n Title: ${req.body.title} \n Author: ${req.body.author}`
      )
    } else {
      res.status(422).send("invalid entry")
    }
  } catch (err) {
    res.status(500).send("operation failed")
    console.log(err)
  }
})

router.put("/update/:bookId", async (req, res) => {
  const connect = await dbConnect()

  if (ObjectId.isValid(req.params.bookId)) {
    const filter = { _id: new ObjectId(req.params.bookId) }
    // (this will set new/invalid keys, but with mongoose we'll get schema validation)
    const update = { $set: req.body }
    const result = await connect.updateOne(filter, update)
    res.send(`${result.modifiedCount} books updated`)
  } else {
    res.status(404).send("Invalid book id")
  }
})

router.delete("/delete/:bookId", async (req, res) => {
  const connect = await dbConnect()

  if (ObjectId.isValid(req.params.bookId)) {
    const result = await connect.deleteOne({
      _id: new ObjectId(req.params.bookId),
    })
    res.send(`${result.deletedCount} books deleted`)
  } else {
    res.status(404).send("Invalid book id")
  }
})

module.exports = router
