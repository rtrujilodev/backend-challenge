module.exports = (Sequelize, DataTypes) => {
  const TypePhone = Sequelize.define('TypePhone', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  }, {
    tableName: 'type_phones',
    freezeTableName: true,
    timestamps: false,
  });

  return TypePhone;
}
