module.exports = (Sequelize, DataTypes) => {
  const TypePosition = Sequelize.define('TypePosition', {
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
    tableName: 'type_positions',
    freezeTableName: true,
    timestamps: false,
  });

  return TypePosition;
}
