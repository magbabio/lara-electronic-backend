'use strict';
const {
  Model
} = require('sequelize');
const orders = require('./orders');
module.exports = (sequelize, DataTypes) => {
  class customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      customers.hasMany(orders, {
        foreignKey: 'customer_id'
      });
    }
  }
  customers.init({
    document_type: DataTypes.STRING,
    document_number: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    notes: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'customers',
  });
  return customers;
};