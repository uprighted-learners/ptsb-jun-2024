const express = require("express")
const app = express()
const port = 4000

// import JSON files using require
const pokeData = require("./pokemon.json")

// middleware to read json data from request body
app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello world")
})

app.get("/pokemon/hp-filter", (req, res) => {
  const maxHp = req.query["max-hp"] || 100000
  const minHp = req.query["min-hp"] || 0

  const result = pokeData.filter(
    (p) => p.hitPoints <= maxHp && p.hitPoints >= minHp
  )

  res.send(result)
})

app.get("/pokemon", (req, res) => {
  res.send(pokeData)
})

app.get("/pokemon/:id", (req, res) => {
  const id = req.params.id
  const pokemon = pokeData.find((p) => p.id == id)
  res.send(pokemon)
})

app.get("/search", (req, res) => {
  // you get to figure this one out on your own
})

app.post("/pokemon", (req, res) => {
  const props = [
    "name",
    "attack",
    "defense",
    "hitPoints",
    "description",
    "abilities",
    "image",
    "evolution",
  ]

  const isValid = props.every((prop) => req.body.hasOwnProperty(prop))
  if (isValid) {
    // use res.status to set a numeric HTTP status code
    res.status(204)
    res.send()
  } else {
    res.status(422)
    res.send("invalid data")
  }
})

app.listen(port, () => {
  console.log("pokeData")
})
