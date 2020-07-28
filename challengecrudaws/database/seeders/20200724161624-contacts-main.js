'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ContactsMain', [{
        usersId:1,
        phone:1112345678,
        cell:11987654321,
        whatsapp:11987654321,
        createdAt: new Date(),
        updatedAt: new Date()
     },{
        usersId:2,
        phone:1142243387,
        cell:11994299171,
        whatsapp:11994299171,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        usersId:3,
        phone:1188888888,
        cell:119999999999,
        whatsapp:11999999999,
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('ContactsMain', null, {});
  }
};
