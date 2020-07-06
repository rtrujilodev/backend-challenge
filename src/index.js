const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require("dotenv").config()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routesUser = require('./routes/users.js')
app.use(routesUser)

const routesSession = require('./routes/session.js')
app.use(routesSession)

let models = require('./models');

models.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Backend Started!')
  })
})