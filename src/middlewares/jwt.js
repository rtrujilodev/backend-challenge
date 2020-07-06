const jwt = require('jsonwebtoken')
const fs = require('fs');
const bcrypt = require('bcrypt')
const models = require('../models')
const pathKeys = __dirname + '/../../keys'

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).send({ auth: false, message: 'Token não informado.' });
  }

  const publicKey = fs.readFileSync(pathKeys + '/no.pwd.server.pem');

  jwt.verify(token, publicKey, { algorithms: ["RS256"] }, function (err, decoded) {
    if (err) {
      return res.status(500).send({ auth: false, err, message: 'Token inválido.' });
    }
    req.userId = decoded.uuid;
    console.log("User Id: " + decoded.uuid)
    next();
  });
}

const createJWT = async (req, res, next) => {

  const user = await models.User.findOne({
    where: {
      email: req.body.email
    }
  })

  if (user && user.uuid) {
    const compare = await bcrypt.compare(req.body.password, user.password)
    if (compare === true) {
      const privateKey = fs.readFileSync(pathKeys + '/no.pwd.server.key');
      req.uuid = user.uuid
      req.token = jwt.sign({ uuid: user.uuid }, privateKey, {
        expiresIn: 300,
        algorithm: "RS256",
      });
      return next()
    } else {
      return res.status(401).json({ msg: 'Password inválido!' });
    }
  } else {
    return res.status(401).json({ msg: 'Login inválido!' });
  }
}

module.exports = {
  verifyJWT,
  createJWT,
}