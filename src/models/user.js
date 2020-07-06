const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid');

module.exports = (Sequelize, DataTypes) => {

  const hashPassword = async (instance, optons) => {
    instance.password = await bcrypt.hash(instance.password, 10)
  }

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
      // set(value) {
      //   this.setDataValue('password', await bcrypt.hash(value, 10));
      // },
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
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword
    },
  });

  // User.beforeCreate(function (model, options, cb) {
  //   debug('Info: ' + 'Storing the password');
  //   model.generateHash(model.password, function (err, encrypted) {
  //     if (err) return cb(err);
  //     debug('Info: ' + 'getting ' + encrypted);

  //     model.password = encrypted;
  //     debug('Info: ' + 'password now is: ' + model.password);
  //     return cb(null, options);
  //   });
  // });
  // User.beforeCreate(user => user.uuid = uuidv4());



  return User;
}
