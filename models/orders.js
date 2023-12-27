'use strict';
const {
  Model
} = require('sequelize');
const customers = require('./customers');
const companies = require('./companies');
const equipment = require('./equipment');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orders.belongsTo(customers);
      orders.belongsTo(companies);
      orders.hasMany(equipment, {
        foreignKey: 'order_id'
      });
    }
  }
  orders.init({
    number: DataTypes.STRING,
    receipt_date: DataTypes.DATE,
    received_by: DataTypes.STRING,
    observations: DataTypes.STRING,
    notes: DataTypes.STRING,
    order_status: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};