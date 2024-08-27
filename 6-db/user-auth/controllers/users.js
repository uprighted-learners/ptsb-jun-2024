const router = require("express").Router()
const User = require("../model/User")
const bcrypt = require("bcrypt")

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

// TODO: login endpoint
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (!user) {
      res.send("unknown username")
    } else {
      const verified = await bcrypt.compare(password, user.password)
      verified ? res.send("logged in ") : res.send("incorrect password")

      if (verified) {
        res.send("logged in")
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
