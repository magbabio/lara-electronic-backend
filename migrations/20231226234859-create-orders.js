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
number: {
type: Sequelize.STRING
},
receipt_date: {
type: Sequelize.DATE
},
received_by: {
type: Sequelize.STRING
},
observations: {
type: Sequelize.STRING
},
notes: {
type: Sequelize.STRING
},
order_status: {
type: Sequelize.INTEGER
},
status: {
type: Sequelize.BOOLEAN
},
createdAt: {
allowNull: false,
type: Sequelize.DATE
},
updatedAt: {
allowNull: false,
type: Sequelize.DATE
}
});
},
async down(queryInterface, Sequelize) {
await queryInterface.dropTable('orders');
}
};