'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      uuid: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      name: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },
      cpf: {
        type: Sequelize.DataTypes.STRING(11),
        unique: true,
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING(100),
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      type_position_id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: {
            tableName: 'type_positions',
          },
          key: 'id'
        },
      },
      type_phone_id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: {
            tableName: 'type_phones',
          },
          key: 'id'
        },
      },
      phone_number: {
        type: Sequelize.DataTypes.STRING(11),
        allowNull: false,
      },
      social_network_id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: {
            tableName: 'social_networks',
          },
          key: 'id'
        },
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
  }
};
