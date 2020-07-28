'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('ContactsSocial', {
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
        facebook: {
            type:Sequelize.STRING
        },
        instagram: {
            type:Sequelize.STRING
        },
        linkedin: {
            type:Sequelize.STRING
        },
        pinterest: {
            type:Sequelize.STRING
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
     await queryInterface.dropTable('ContactsSocial');
  }
};
