const { mongoose } = require("../db")

const Book = new mongoose.Schema({
  author: {
    type: String,
    required: false,
    maxLength: 150,
  },
  title: String,
})

// generate a collection
module.exports = mongoose.model("books", Book)
