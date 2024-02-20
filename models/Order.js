'use strict';
const {
  Model
} = require('sequelize');
const Customer = require('./index');
const Company = require('./Company');
const User = require('./User');
const Equipment = require('./Equipment');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Customer, { foreignKey: 'customer_id' });
      Order.belongsTo(models.Company, { foreignKey: 'company_id' });
      Order.belongsTo(models.User,  { foreignKey: 'user_id' });
      Order.hasMany(models.Equipment, {
        foreignKey: 'order_id'
      });
    }
  }
  Order.init({
    customer_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    number: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: 'Número de orden es requerido'
        },
        len: {
          args: [6],
          msg: 'Número de orden debe tener 6 caracteres'
        }
      }
    },
    receipt_date: {
      type: DataTypes.DATE,
      allowNull: false, 
      validate: {
        notNull: {
          msg: 'Fecha de recepción es requerida'
        }
      }
    },  
    observations: { 
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 255],
          msg: 'Observaciones debe tener entre 1 y 255 caracteres'
        }
      }
    },
    order_status: DataTypes.INTEGER,
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at' 
  });
  return Order;
};