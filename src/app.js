const express = require('express')
const app = express()
const cors = require('cors')
const router = express.Router()
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
require("dotenv").config()

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(cors())
router.use(awsServerlessExpressMiddleware.eventContext())

const routesUser = require('./routes/users.js')
router.use(routesUser)

const routesSession = require('./routes/session.js')
router.use(routesSession)

app.use('/', router)

module.exports = app
// app.listen(3000, () => {
//     console.log('Backend Started!')
// })