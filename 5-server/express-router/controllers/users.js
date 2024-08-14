const express = require("express")
const router = express.Router()

console.log(express)

router.get("/", (req, res) => {
  res.send("got user")
})

router.post("/add", (req, res) => {
  res.send("saved user")
})

router.put("/update/:userId", (req, res) => {
  res.send("updated user")
})

router.delete("/delete/:userId", (req, res) => {
  res.send("deleted user")
})

module.exports = router
