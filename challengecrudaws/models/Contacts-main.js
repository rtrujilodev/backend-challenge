const { Model, DataTypes } = require('sequelize');

class ContactsMain extends Model {
    static init(sequelize) {
        super.init({
            phone:DataTypes.INTEGER,
            cell:DataTypes.INTEGER,
            whatsapp:DataTypes.INTEGER
        }, {
            freezeTableName: true,
            sequelize
        });
    }
    static associate(models) {
        this.belongsTo(models.Users, { foreignKey:'usersId', as:'user_contacts' });
    }
}

module.exports = ContactsMain;
