'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
async up(queryInterface, Sequelize) {
await queryInterface.createTable('orders', {
id: {
allowNull: false,
autoIncrement: true,
primaryKey: true,
type: Sequelize.INTEGER
},
customer_id: {
type: Sequelize.INTEGER,
allowNull: false,
references: {
model: 'customers',
key: 'id',
},
onUpdate: 'CASCADE',
onDelete: 'CASCADE',
},
company_id: {
type: Sequelize.INTEGER,
allowNull: false,
references: {
model: 'companies',
key: 'id',
},
onUpdate: 'CASCADE',
onDelete: 'CASCADE',
},
user_id: {
  type: Sequelize.INTEGER,
  allowNull: false,
  references: {
  model: 'users',
  key: 'id',
  },
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
},
number: {
type: Sequelize.STRING
},
receipt_date: {
type: Sequelize.DATE
},
observations: {
type: Sequelize.STRING
},
order_status: {
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
await queryInterface.dropTable('orders');
}
};

