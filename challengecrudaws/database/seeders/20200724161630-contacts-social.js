'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ContactsSocial', [{
        usersId:1,
        facebook:'https://www.facebook.com/john.doe',
        createdAt: new Date(),
        updatedAt: new Date()
     },{
        usersId:2,
        facebook:'https://www.facebook.com/rodrigo.trujilo.9',
        instagram:'https://www.instagram.com/rodrigotrujilo',
        linkedin:'https://www.linkedin.com/in/rodrigo-trujilo-8961b38a',
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('ContactsSocial', null, {});
  }
};
