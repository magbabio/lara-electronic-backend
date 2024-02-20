'use strict';
const {
  Model
} = require('sequelize');
const Order = require('./Order');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Order, {
        foreignKey: 'user_id'
      });
    }
  }
  User.init({
    document_type: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: 'Tipo de documento es requerido'
        },
        isIn: {
          args: [['J', 'V', 'E', 'G']],
          msg: 'Tipo de documento debe ser J, V, E o G'
        },
        len: {
          args: [1, 1],
          msg: 'Tipo de documento debe tener sólo un caracter'
        }
      }
    },
    document_number: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: 'Número de documento es requerido'
        },
        len: {
          args: [1, 10],
          msg: 'Número de documento debe tener entre 1 y 10 caracteres'
        }
      }
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: 'Nombre es requerido'
        },
        len: {
          args: [1, 25],
          msg: 'Nombre debe tener entre 1 y 25 caracteres'
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: 'Apellido es requerido'
        },
        len: {
          args: [1, 255],
          msg: 'Apellido debe tener entre 1 y 25 caracteres'
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: 'Teléfono es requerido'
        },
        len: {
          args: [4, 12],
          msg: 'Teléfono debe tener entre 4 y 12 caracteres'
        },
        isPhoneNumberValid(value) {
          if (!/^0[0-9]{3}-[0-9]{7}$/.test(value)) {
            throw new Error('Teléfono no es válido');
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Correo electrónico es requerido'
        },
        isEmail: {
          msg: 'Correo electrónico no es válido'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: 'Contraseña es requerida'
        },
        // len: {
        //   args: [8, 16],
        //   msg: 'Contraseña debe tener entre 8 y 16 caracteres'
        // }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: 'Rol es requerido'
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: true,
      validate: {
        notNull: {
          msg: 'Status is required'
        }
      }
    },
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at' 
  });
  return User;
};