'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
        name: 'John Doe',
        email: 'john.doe@transactsql.com',
        password: await bcrypt.hash('3ncryptm3', 10),
        createdAt: new Date(),
        updatedAt: new Date()
     },{
        name: 'Rodrigo Trujilo',
        email: 'rtrujilo.dev@gmail.com',
        password: await bcrypt.hash('b1nary', 10),
        createdAt: new Date(),
        updatedAt: new Date()
     },{
        name: 'Robert',
        email: 'robert.designer@transactsql.com',
        password: await bcrypt.hash('c0d3m0rs3', 10),
        createdAt: new Date(),
        updatedAt: new Date()
     },{
        name: 'Willian',
        email: 'willian.manager@transactsql.com',
        password: await bcrypt.hash('zer0c@ll', 10),
        createdAt: new Date(),
        updatedAt: new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
