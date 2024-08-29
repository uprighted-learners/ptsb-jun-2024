const router = require("express").Router()
const User = require("../model/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const SALT = Number(process.env.SALT)
const JWT_KEY = process.env.JWT_KEY

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
      if (verified) {
        const token = jwt.sign({ id: user._id }, JWT_KEY, {
          expiresIn: 60 * 60 * 24,
        })
        res.send({
          message: `authenticated user ${user.username}`,
          user,
          token,
        })
      } else {
        res.send("incorrect password")
      }
    } else {
      res.send("invalid username")
    }
  } catch (err) {
    console.log(err)
    res.status(500).send(`server error: ${err}`)
  }
})

module.exports = router
