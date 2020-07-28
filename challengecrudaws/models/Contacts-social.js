const { Model, DataTypes } = require('sequelize');

class ContactsSocial extends Model {
    static init(sequelize) {
        super.init({
            facebook:DataTypes.STRING,
            instagram:DataTypes.STRING,
            linkedin:DataTypes.STRING,
            pinterest:DataTypes.STRING
        }, {
            freezeTableName: true,
            sequelize
        });
    }
    static associate(models) {
        this.belongsTo(models.Users, { foreignKey:'usersId', as:'user_socials' });
    }
}

module.exports = ContactsSocial;
 
