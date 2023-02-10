const router = require('express').Router();
const { User} = require('../../models');
const bcrypt = require('bcrypt');
const { validateToken } = require('../../middleWares/AuthMiddlewares');
const { sign } = require('jsonwebtoken');

//login
router.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  await User.findOne({ username: username })
    .populate({path: "songList"})
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        res.status(404).json({ message: 'User Not Found' });
      }

      const passwordIsValid = bcrypt.compareSync(
        password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({ message: "Invalid Password" });
      }
      
      let userSongs = [];
      for (let i = 0; i < user.songList.length; i++) {
        userSongs.push(user.songList[i])
      }

      const accessToken = sign(
        { username: user.username, _id: user._id },
        "importantsecret");

      // res.json({
      //   token: accessToken,
      //   username: username,
      //   _id: user._id,
      //   songList: user.songList
      // });

      res.status(200).send({
        token: accessToken,
        username: username,
        _id: user._id,
        userSongs: userSongs
      });
      console.log(userSongs)   
    });
});

router.get('/authToken', validateToken, (req, res) => {
  res.json(req.user)
})

//signup
router.post('/signup', async (req, res) => {
  const username = req.body.usernameSignup;
  const password = req.body.passwordSignup;

  const user = new User({ username: username, password: password })

  try {
    await user.save();
    res.send('USER ADDED')
  } catch (err) {
    console.log(err)
  }
})

router.get('/:id', async (req, res) => {
  User.findOne({ _id: req.params.id })
    .select('-__v')
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with that ID' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
})

module.exports = router;