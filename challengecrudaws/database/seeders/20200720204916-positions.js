'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Positions', [{
        usersId:1,
        position:'Programador front-end',
        createdAt: new Date(),
        updatedAt: new Date()
     },{
        usersId:2,
        position:'Programador back-end',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        usersId:3,
        position:'Designer',
        createdAt: new Date(),
        updatedAt: new Date()        
    },{
        usersId:4,
        position:'Gerente de projetos',
        createdAt: new Date(),
        updatedAt: new Date()        
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Positions', null, {});
  }
};
