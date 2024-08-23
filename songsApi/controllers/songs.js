const express = require("express")
const router = express.Router()

const Song = require("../model/Song")

// get all
router.get("/", async (req, res) => {
  const songs = await Song.find()
  res.send(songs)
})

// get song by id
router.get("/catalog/:songId", async (req, res) => {
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

// const getNewId = () => {
//   const songs = getJSON()
//   const lastSong = songs[songs.length - 1]
//   return lastSong.id + 1
// }

// // post
// router.post("/add", (req, res) => {
//   const songs = getJSON()
//   const newSong = {
//     id: getNewId(),
//     title: req.body.title || "untitled",
//     artist: req.body.artist || "unknown artist",
//     releaseYear: req.body.releaseYear || "unknown",
//     album: req.body.album || "single",
//     genre: req.body.genre || [],
//   }
//   songs.push(newSong)
//   fs.writeFileSync(SONGS_PATH, JSON.stringify(songs))
//   res.send("song added")
// })

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
