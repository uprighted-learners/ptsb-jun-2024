const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send("got data")
})

router.post("/", (req, res) => {
  res.send("saved data")
})

router.put("/", (req, res) => {
  res.send("updated data")
})

router.delete("/", (req, res) => {
  res.send("deleted data")
})

module.exports = router
