const express = require('express')
const router = express.Router()
const mdJWT = require('../middlewares/jwt')
const models = require('../models')

router.get('/user/:uuid', mdJWT.verifyJWT, async (req, res, next) => {
  try {
    if (req.userId !== req.params.uuid) {
      return res.status(401).json({ msg: 'Pode pegar informações do seu usuario' })
    }

    const user = await models.User.findOne({
      where: {
        uuid: req.params.uuid
      }
    })

    res.json(user)
  } catch (error) {
    res.json({ error })
  }
})

module.exports = router