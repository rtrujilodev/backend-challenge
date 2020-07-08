'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('type_phones', {
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
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('type_phones')
  }
};
