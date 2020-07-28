'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn('Users', 'password', Sequelize.STRING, {
        allowNull:false
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('Users','password');
  }
};
