const { Schema, model } = require('mongoose')

const songSchema = new Schema({
  songTitle: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
})

const Song = model("Song", songSchema);

module.exports = Song
