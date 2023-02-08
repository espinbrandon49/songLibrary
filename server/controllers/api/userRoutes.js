const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const { validateToken } = require('../../middleWares/AuthMiddlewares');
const { sign } = require('jsonwebtoken');

//login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username: username } });

  if (!user) return res.json({ error: "User doesn't exist" });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) return res.json({ error: 'Wrong username and password combination' })

    const accessToken = sign(
      { username: user.username, _id: user._id },
      "importantsecret"
    );
    res.json({ token: accessToken, username: username, _id: user._id });
  });
})

//identify who is logged in
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

module.exports = router;
