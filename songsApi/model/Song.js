const { mongoose } = require("../db")

const Song = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 250,
  },
  artist: {
    type: String,
    required: true,
    maxLength: 250,
  },
  album: {
    type: String,
    required: false,
    maxLength: 250,
  },
  releaseYear: {
    type: Number,
    required: true,
    max: new Date().getFullYear() + 1,
  },
  genre: [String],
})

module.exports = mongoose.model("songs", Song)
