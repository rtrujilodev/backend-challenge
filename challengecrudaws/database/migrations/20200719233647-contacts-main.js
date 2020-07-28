'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('ContactsMain', {
        id: {
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        usersId: {
            type:Sequelize.INTEGER,
            references: { model:'Users', key:'id' },
            allowNull:false,
            onUpdate:'CASCADE',
            onDelete:'CASCADE'
        },
        phone: {
            type:Sequelize.BIGINT(11)
        },
        cell: {
            type:Sequelize.BIGINT(11)
        },
        whatsapp: {
            type:Sequelize.BIGINT(11),
            allowNull:false
        },
        createdAt: {
            type:Sequelize.DATE,
            allowNull:false
        },
        updatedAt: {
            type:Sequelize.DATE,
            allowNull:false
        },
    });
  },
  

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('ContactsMain');
  }
};
