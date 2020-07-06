module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define('User', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      is: ["^[a-z]+$", 'i']
    },
    cpf: {
      type: DataTypes.STRING(11),
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      isEmail: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_position_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'type_positions',
        },
        key: 'id'
      },
    },
    type_phone_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'type_phones',
        },
        key: 'id'
      },
    },
    phone_number: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    social_network_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'social_networks',
        },
        key: 'id'
      },
    },
  }, {
    tableName: 'users',
    freezeTableName: true,
    timestamps: false,
  });



  return User;
}
