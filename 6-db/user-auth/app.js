require("dotenv").config()

const express = require("express")
const app = express()
const { dbConnect } = require("./db")
const tokenValidation = require("./middlewares/tokenValidation")

const PORT = process.env.PORT

app.use(express.json())

const booksRouter = require("./controllers/books")
app.use("/api/add", tokenValidation, booksRouter)
app.use("/api", booksRouter)
const authRouter = require("./controllers/users")
app.use("/auth", authRouter)

app.listen(PORT, () => {
  dbConnect()
  console.log(`listening on port ${PORT}`)
})
