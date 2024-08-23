require("dotenv").config()

const express = require("express")
const app = express()
const { dbConnect } = require("./db")

const PORT = process.env.PORT

// import router
const songRouter = require("./controllers/songs")

// middlewares
app.use(express.json())
app.use(songRouter)

app.listen(PORT, () => {
  dbConnect()
  console.log(`listening on port ${PORT}`)
})
