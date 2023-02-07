const router = require('express').Router();
const { User } = require('../../models');
const  bcrypt = require('bcrypt');
const { validateToken } = require('../../middleWares/AuthMiddlewares');
const { sign } = require('jsonwebtoken');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username: username } });

  if (!user) return res.json({ error: "User doesn't exist" });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) return res.json({ error: 'Wrong username and password combination' })

    const accessToken = sign(
      { username: user.username, id: user.id },
      "importantsecret"
    );
    res.json({ token: accessToken, username: username, id: user.id });
  });
})

router.get('/authToken', validateToken, (req, res) => {
  res.json(req.user)
})

//signup
router.post('/signup', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = new User({ username: username, password: password })
  
  try {
    await user.save();
    res.send('USER ADDED')
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;
