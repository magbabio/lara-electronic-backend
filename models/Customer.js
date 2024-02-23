'use strict';
const {
  Model
} = require('sequelize');
const Order = require('./Order');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.hasMany(models.Order, {
        foreignKey: 'customer_id'
      });
    }
  }
  Customer.init({
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
          args: [1, 25],
          msg: 'Apellido debe tener entre 1 y 25 caracteres'
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: 'Dirección es requerida'
        },
        len: {
          args: [1, 100],
          msg: 'Dirección debe tener entre 1 y 100 caracteres'
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
          args: [1, 25],
          msg: 'Teléfono debe tener entre 1 y 25 caracteres'
        }
      }
    },
    second_phone: {
      type: DataTypes.STRING,
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
    notes: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 255],
          msg: 'Notas debe tener entre 1 y 255 caracteres'
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers',
    timestamps: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at' 
  });
  return Customer;
};