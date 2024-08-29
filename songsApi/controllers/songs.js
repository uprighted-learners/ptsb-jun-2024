const express = require("express")
const router = express.Router()
const tokenValidation = require("../middlewares/tokenValidation")

const Song = require("../model/Song")

// get all
router.get("/", async (req, res) => {
  const songs = await Song.find()
  res.send(songs)
})

// get song by id
router.get("/catalog/:songId", tokenValidation, async (req, res) => {
  // TODO: catch errors
  const songId = req.params.songId
  const song = await Song.findOne({ _id: songId })
  res.send(song)
  // TODO: what to send when no result?
})

// router.get("/search", (req, res) => {
//   const genres = req.query.genre.split(",")
//   const songs = getJSON()

//   const matches = songs.filter((s) => {
//     const lowerCaseGenres = s.genre.map((g) => g.toLowerCase())
//     return genres.every((g) => lowerCaseGenres.includes(g))
//   })
//   res.send(matches)
// })

router.post("/add", tokenValidation, async (req, res) => {
  // TODO: catch errors
  const newSong = new Song(req.body)
  newSong.updatedBy = req.userId
  await newSong.save()
  res.send("song added")
})

// router.put("/update/:songId", (req, res) => {
//   const songId = req.params.songId
//   const songs = getJSON()
//   const song = songs.find((s) => s.id == songId)
//   const index = songs.indexOf(song)

//   let newSong = Object.assign(song, req.body)
//   songs[index] = newSong

//   fs.writeFileSync(SONGS_PATH, JSON.stringify(songs))
//   res.send("song updated")
//   // TODO: prevent bad fields
// })

// router.delete("/delete/:songId", (req, res) => {
//   const songId = req.params.songId
//   const songs = getJSON()
//   const song = songs.find((s) => s.id == songId)
//   const index = songs.indexOf(song)

//   songs.splice(index, 1)

//   fs.writeFileSync(SONGS_PATH, JSON.stringify(songs))
//   res.send("song deleted")
// })

module.exports = router
