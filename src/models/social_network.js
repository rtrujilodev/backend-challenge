module.exports = (Sequelize, DataTypes) => {
  const SocialNetwork = Sequelize.define('SocialNetwork', {
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
    tableName: 'social_networks',
    freezeTableName: true,
    timestamps: false,
  });

  return SocialNetwork;
}
