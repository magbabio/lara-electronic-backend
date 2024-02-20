'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('equipment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
        model: 'orders',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      },
      description: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      serial: {
        type: Sequelize.STRING
      },
      repair_concept: {
        type: Sequelize.STRING
      },
      observations: {
        type: Sequelize.STRING
      },
      arrived_image: {
        type: Sequelize.STRING
      },
      left_image: {
        allowNull: true,
        type: Sequelize.STRING
      },
      delivery_date: {
        allowNull: true,
        type: Sequelize.DATE
      },
      repair_cost: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      equipment_status: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('equipment');
  }
};