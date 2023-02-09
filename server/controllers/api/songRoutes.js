const router = require('express').Router();
const { Song, User } = require('../../models');

router.get('/listofsongs', async (req, res) => {
  Song.find({}, (err, result) => {
    if (err) {
      res.send(err)
    }
    res.send(result)
  })
});

// router.post('/insert', async (req, res) => {
//   const id = req.body.id;
//   const songTitle = req.body.songTitle;
//   const artist = req.body.artist;
//   const album = req.body.album;

//   const song = new Song({ songTitle: songTitle, artist: artist, album: album })

//   try {
//     await song.save();
//     res.send("SONG ADDED")
//   } catch (err) {
//     console.log(error)
//   }
// });

router.post('/insert', (req, res) => {
  const id = req.body.id;
  const songTitle = req.body.songTitle;
  const artist = req.body.artist;
  const album = req.body.album;

  Song.create({ songTitle: songTitle, artist: artist, album: album })
    .then((song) => {
      return User.findOneAndUpdate(
        { _id: id },
        { $addToSet: { songList: song._id } },
        { new: true }
      )
    })
    .then((user) =>
      !user
        ? res.status(404).json({
          message: 'Song created, but found no user with that ID',
        })
        : res.json('Created the song')
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err)
    })
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

  try {
    Song.findById(id, (err, updatedSong) => {
      updatedSong.songTitle = newSongTitle;
      updatedSong.artist = newArtist;
      updatedSong.album = newAlbum;
      updatedSong.save()
      res.send("SONG UPDATED")
    });
  } catch (err) {
    console.log(err)
  }
});

module.exports = router;


