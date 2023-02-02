const router = require('express').Router();
const {Song} = require('../models');

  router.get('/', async (req, res) => {
    Song.find({}, (err, result) => {
      if (err) {
        res.send(err)
      }
      res.send(result)
    })
  });

  module.exports = router;


