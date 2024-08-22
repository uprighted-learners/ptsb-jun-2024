// import environment variables
require("dotenv").config()

const express = require("express")
const app = express()
const { dbConnect } = require("./db")

const PORT = process.env.EXPRESS_PORT

app.use(express.json())

const booksRouter = require("./controllers/books")
app.use("/api", booksRouter)

app.listen(PORT, () => {
  dbConnect()
  console.log(`listening on port ${PORT}`)
})
