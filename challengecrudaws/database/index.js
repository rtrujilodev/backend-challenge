'use strict';
const Sequelize = require('sequelize');
const Users = require('../models/Users');
const Addresses = require('../models/Addresses');
const Positions = require('../models/Positions');
const ContactsMain = require('../models/Contacts-main');
const ContactsSocial = require('../models/Contacts-social');
const dbConfig = new Sequelize(require('./config/db'));

Users.init(dbConfig);
Addresses.init(dbConfig);
Positions.init(dbConfig);
ContactsMain.init(dbConfig);
ContactsSocial.init(dbConfig);
Users.associate(dbConfig.models);
Positions.associate(dbConfig.models);
Addresses.associate(dbConfig.models);
ContactsMain.associate(dbConfig.models);
ContactsSocial.associate(dbConfig.models);
