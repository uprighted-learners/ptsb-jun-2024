const express = require("express")
const app = express()
const PORT = 4000
const cookieParser = require("cookie-parser")

app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(cookieParser())

app.get("/color", (req, res) => {
  // set the color cookie
  const color = req.query.bgColor
  res.cookie("color", color)
  res.redirect("/")
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
