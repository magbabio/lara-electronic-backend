'use strict';
const {
  Model
} = require('sequelize');
const Customer = require('./Customer');
const Company = require('./Company');
const Equipment = require('./Equipment');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Customer);
      Order.belongsTo(models.Company);
      Order.hasMany(models.Equipment, {
        foreignKey: 'order_id'
      });
    }
  }
  Order.init({
    number: DataTypes.STRING,
    receipt_date: DataTypes.DATE,
    received_by: DataTypes.STRING,
    observations: DataTypes.STRING,
    notes: DataTypes.STRING,
    order_status: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
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