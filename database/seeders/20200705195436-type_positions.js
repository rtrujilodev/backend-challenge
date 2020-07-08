'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('type_positions',
      [
        {
          name: 'Programador front-end',
        },
        {
          name: 'Programador back-end',
        },
        {
          name: 'Designer',
        },
        {
          name: 'Gerente de projetos',
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('type_positions', null, {})
  }
};
