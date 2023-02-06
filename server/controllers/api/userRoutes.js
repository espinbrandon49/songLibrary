const router = require('express').Router();
const { User } = require('../../models');
const { validateToken } = require('../../middleWares/AuthMiddlewares');
const { sign } = require('jsonwebtoken');

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
