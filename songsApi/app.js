const express = require("express")
const app = express()
const PORT = 4000

// import router
const songRouter = require("./controllers/songs")

// middlewares
app.use(express.json())
app.use(songRouter)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
