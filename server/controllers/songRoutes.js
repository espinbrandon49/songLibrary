const router = require('express').Router();
const { Song } = require('../models');

router.get('/', async (req, res) => {
  Song.find({}, (err, result) => {
    if (err) {
      res.send(err)
    }
    res.send(result)
  })
});

router.post('/insert', async (req, res) => {

  const songTitle = req.body.songTitle;
  const artist = req.body.artist;
  const album = req.body.album;

  const song = new Song({ songTitle: songTitle, artist: artist, album: album })

  try {
    await song.save();
    res.send("SONG ADDED")
  } catch (err) {
    console.log(error)
  }
});

router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id 
  await Song.findByIdAndRemove(id).exec()
  res.send("SONG DELETED")
})

router.put('/update', async (req, res) => {

  const newSongTitle = req.body.newSongTitle;
  const newArtist = req.body.newArtist;
  const newAlbum = req.body.newAlbum;
  const id = req.body.id;

  const song = { songTitle: newSongTitle, artist: newArtist, album: newAlbum }

  try {
    await Song.findById(id, (err, updatedSong) => {
      updatedSong.songTitle = newFoodName;
      updatedFood.save()
      res.send("update")
    });
  } catch (err) {
    console.log(err)
  }
});

module.exports = router;


