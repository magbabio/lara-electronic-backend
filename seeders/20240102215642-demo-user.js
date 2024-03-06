const bcrypt = require('bcrypt');

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash('1234', 10);
    return queryInterface.bulkInsert('users', [{
      document_type:'V',
      document_number:'28348251',
      first_name: 'Mariel',
      last_name: 'García',
      phone: '0424-5269633',
      email: 'magbabio@gmail.com',
      password: password,
      role: 'Admin',
      status: true,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
