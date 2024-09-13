require("dotenv").config()

const express = require("express")
const app = express()
const cors = require("cors")
const { dbConnect } = require("./db")

const PORT = process.env.PORT

// import router
const songRouter = require("./controllers/songs")
const authRouther = require("./controllers/users")

// middlewares
app.use(express.json())
app.use(cors())
app.use("/api", songRouter)
app.use("/auth", authRouther)

app.listen(PORT, () => {
  dbConnect()
  console.log(`listening on port ${PORT}`)
})
