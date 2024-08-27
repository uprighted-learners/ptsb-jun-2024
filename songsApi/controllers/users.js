const router = require("express").Router()
const User = require("../model/User")
const bcrypt = require("bcrypt")

const SALT = Number(process.env.SALT)

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body
    const user = new User({
      username,
      password: bcrypt.hashSync(password, SALT),
    })
    await user.save()
    res.status(201).send(`created user ${user.username}`)
  } catch (err) {
    console.log(err)
    res.status(500).send(`server error: ${err}`)
  }
})

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (user) {
      const verified = await bcrypt.compare(password, user.password)
      verified ? res.send("logged in") : res.send("incorrect password")
      // TODO: generate a JWT
    } else {
      res.send("invalid username")
    }
  } catch (err) {
    console.log(err)
    res.status(500).send(`server error: ${err}`)
  }
})

module.exports = router
