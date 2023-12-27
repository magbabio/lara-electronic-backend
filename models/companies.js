'use strict';
const {
  Model
} = require('sequelize');
const orders = require('./orders');
module.exports = (sequelize, DataTypes) => {
  class companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      companies.hasMany(orders, {
        foreignKey: 'company_id'
      });
    }
  }
  companies.init({
    document_type: DataTypes.STRING,
    document_number: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'companies',
  });
  return companies;
};