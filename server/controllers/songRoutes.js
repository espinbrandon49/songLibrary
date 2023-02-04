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

router.put('/update/:id', async (req, res) => {
  Song.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { runValidators: true, new: true }
  )
    .then((song) =>
      !song
        ? res.status(404).json({ message: 'No song with this id!' })
        : res.json(song)
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
    console.log(req.body)
});

module.exports = router;


