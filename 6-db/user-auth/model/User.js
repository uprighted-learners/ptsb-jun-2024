const { mongoose } = require("mongoose")

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxLength: 150,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("users", User)
