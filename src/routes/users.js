const express = require('express')
const router = express.Router()
const mdJWT = require('../middlewares/jwt')
const models = require('../models')
const { v4: uuidv4 } = require('uuid')

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

router.post('/user', async (req, res, next) => {
  try {
    const user = await models.User.create({ uuid: uuidv4(), ...req.body }, { individualHooks: true });
    res.json({ user })
  } catch (error) {
    console.log(error)
    res.status(401).json({ msg: 'Erro ao tentar incluir usuario, tente fazer login caso ja exista o mesmo email ou CPF' })
  }
})


router.put('/user', async (req, res, next) => {
  res.status(401).json({ msg: 'Nao implementado' })
})

module.exports = router