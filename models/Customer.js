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
    document_type: DataTypes.STRING,
    document_number: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    notes: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
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