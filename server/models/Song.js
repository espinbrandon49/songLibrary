const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
  songTitle: {
    type: String,
  },
  artist: {
    type: String,
  },
  album: {
    type: String,
  },
})

const Song = mongoose.model("Song", SongSchema)
module.exports = Song
