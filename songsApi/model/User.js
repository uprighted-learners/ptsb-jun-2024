const { mongoose } = require("../db")

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    maxLength: 80,
  },
  password: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("users", User)
