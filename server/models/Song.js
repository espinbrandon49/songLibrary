const { Schema, model } = require('mongoose')

const songSchema = new Schema({
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

const Song = model("Song", songSchema);

module.exports = Song;
