'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('social_networks',
      [
        {
          name: 'Facebook',
        },
        {
          name: 'Instagram',
        },
        {
          name: 'Linkedin',
        },
        {
          name: 'Pinterest',
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('social_networks', null, {})
  }
};
