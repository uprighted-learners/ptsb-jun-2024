const express = require("express")
const app = express()
const PORT = 4000

// import the controllers
const userRoutes = require("./controllers/users")
const dataRoutes = require("./controllers/data-app")

// apply the controllers as middleware
app.use("/user", userRoutes)
app.use("/data", dataRoutes)

// we can have routes in here as well (but usually won't)
app.get("/", (req, res) => {
  res.send("hey")
})

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`)
})
