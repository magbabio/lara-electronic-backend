'use strict';
const {
  Model
} = require('sequelize');
const orders = require('./orders');
module.exports = (sequelize, DataTypes) => {
  class equipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      equipment.belongsTo(orders);
    }
  }
  equipment.init({
    description: DataTypes.STRING,
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    serial: DataTypes.STRING,
    observations: DataTypes.STRING,
    arrived_image: DataTypes.STRING,
    left_image: DataTypes.STRING,
    delivery_date: DataTypes.DATE,
    repair_cost: DataTypes.FLOAT,
    equipment_status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'equipment',
  });
  return equipment;
};