const db = require('../config/connection');
const { Song } = require('../models');

const songData = require('./songs.json');

db.once('open', async () => {
  await Song.deleteMany({});

  await Song.insertMany(songData);

  console.log('Songs seeded!');
  process.exit(0);
});
