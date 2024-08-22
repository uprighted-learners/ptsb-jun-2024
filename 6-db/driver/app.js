const express = require("express")
const app = express()
const PORT = 4000

app.use(express.json())

const booksRouter = require("./controllers/books")
app.use("/api", booksRouter)

app.listen(PORT, () => {
  // here is where we open the db connection
  console.log(`listening on port ${PORT}`)
})
