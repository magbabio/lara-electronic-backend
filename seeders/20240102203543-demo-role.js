'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('roles', [
      {
        name: 'Admin',
        status: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'User',
        status: true,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};