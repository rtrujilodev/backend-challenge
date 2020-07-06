const express = require('express')
const router = express.Router()
const mdJWT = require('../middlewares/jwt')
const models = require('../models')

router.get('/user', mdJWT.verifyJWT, (req, res, next) => {
  try {
    models.User.findAll().then(function (users) {
      res.json(users);
    });
  } catch (error) {
    res.json({ error })
  }
})

module.exports = router