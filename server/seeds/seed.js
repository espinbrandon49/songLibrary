const db = require('../config/connection');
const { Song, User } = require('../models');

const songData = require('./songs.json');
const userData = require('./user.json');

db.once('open', async () => {
  await Song.deleteMany({});
  await User.deleteMany({});

  const songsInsert =  await Song.insertMany(songData);
  const userInsert =  await User.insertMany(userData);

  console.log('Songs and Users seeded!');
  process.exit(0);
});
