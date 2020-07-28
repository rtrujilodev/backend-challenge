const { Model, DataTypes } = require('sequelize');

class Users extends Model {
    static init(sequelize) {
        super.init({
            name:DataTypes.STRING,
            email:DataTypes.STRING,
            password:DataTypes.STRING
        }, {
            sequelize
        });
    }
    static associate(models) {
        this.hasOne(models.Positions, { foreignKey:'usersId', as:'position' });
        this.hasMany(models.Addresses, { foreignKey:'usersId', as:'addresses' });
        this.hasMany(models.ContactsMain, { foreignKey:'usersId', as:'contacts' });
        this.hasMany(models.ContactsSocial, { foreignKey:'usersId', as:'socials' });
    }
}

module.exports = Users;
