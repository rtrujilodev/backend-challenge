'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('type_phones',
      [
        {
          name: 'Fixo',
        },
        {
          name: 'Celular',
        },
        {
          name: 'WhatsApp',
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('type_phones', null, {})
  }
};
