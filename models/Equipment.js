'use strict';
const {
  Model
} = require('sequelize');
const Order = require('./Order');
module.exports = (sequelize, DataTypes) => {
  class Equipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Equipment.belongsTo(models.Order, { foreignKey: 'order_id' });
    }
  }
  Equipment.init({
    order_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    serial: DataTypes.STRING,
    repair_concept: DataTypes.STRING,
    observations: DataTypes.STRING,
    arrived_image: DataTypes.STRING,
    left_image: DataTypes.STRING,
    delivery_date: DataTypes.DATE,
    repair_cost: DataTypes.FLOAT,
    equipment_status: DataTypes.INTEGER,
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Equipment',
    tableName: 'equipment',
    timestamps: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at' 
  });
  return Equipment;
};
