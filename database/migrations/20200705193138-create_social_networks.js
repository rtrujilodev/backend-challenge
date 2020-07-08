'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('social_networks', {
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('social_networks');
  }
};
