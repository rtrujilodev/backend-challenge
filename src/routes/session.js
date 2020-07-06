const express = require('express')
const router = express.Router()
const mdJWT = require('../middlewares/jwt')

router.post('/logout', (req, res, next) => {
  res.status(200).json({ token: null });
})

router.post('/login', mdJWT.createJWT, (req, res, next) => {
  res.status(200).json({ token: req.token })
})

module.exports = router