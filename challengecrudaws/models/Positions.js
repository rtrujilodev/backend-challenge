const { Model, DataTypes } = require('sequelize');

class Positions extends Model {
    static init(sequelize) {
        super.init({
         position:DataTypes.STRING
        }, {
            sequelize
        });
    }
    static associate(models) {
        this.belongsTo(models.Users, { foreignKey:'usersId', as:'user_position' });
    }
}

module.exports = Positions; 
