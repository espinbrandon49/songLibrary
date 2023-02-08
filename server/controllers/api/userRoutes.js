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

//get singleUser
// router.get('/:id', async (req, res) => {
//   const id = req.params.id;
//   console.log(id)
//   const userInfo = await User.findByPk(id, {
//     attributes: { exclude: ['password'] },
//   })
//   res.json(userInfo)
// })

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
