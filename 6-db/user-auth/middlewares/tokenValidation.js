const jwt = require("jsonwebtoken")
const JWT_KEY = process.env.JWT_KEY

const tokenValidation = (req, res, next) => {
  try {
    let token = req.headers.authorization
    if (token) {
      // identify Bearer tokens
      if (token.includes("Bearer")) token = token.split(" ")[1]

      // verify the token
      const payload = jwt.verify(token, JWT_KEY)
      if (payload) {
        console.log(payload)
        // TODO: ??
        next()
      }
    }
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

module.exports = tokenValidation
