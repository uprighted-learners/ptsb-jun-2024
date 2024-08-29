const router = require("express").Router()
const User = require("../model/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const JWT_KEY = process.env.JWT_KEY

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body
    const newUser = new User({
      username,
      email,
      password: bcrypt.hashSync(password, Number(process.env.SALT)),
    })
    await newUser.save()
    res.send(`new user ${req.body.username} added`)
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (!user) {
      res.send("unknown username")
    } else {
      const verified = await bcrypt.compare(password, user.password)
      if (verified) {
        const token = jwt.sign({ id: user._id }, JWT_KEY, {
          expiresIn: 60 * 60 * 24,
        })
        res.json({ message: "logged in", user, token })
      } else {
        res.send("incorrect password")
      }
    }
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})

module.exports = router
