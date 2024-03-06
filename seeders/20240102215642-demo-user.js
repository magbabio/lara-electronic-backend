const bcrypt = require('bcrypt');

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash('1234', 10);
    
    const [user, created] = await queryInterface.sequelize.models.users.findOrCreate({
      where: {
        email: 'magbabio@gmail.com'
      },
      defaults: {
        document_type: 'V',
        document_number: '28348251',
        first_name: 'Mariel',
        last_name: 'García',
        phone: '0424-5269633',
        email: 'magbabio@gmail.com',
        password: password,
        role: 'Admin',
        status: true,
        created_at: new Date(),
        updated_at: new Date()
      }
    });

    if (!created) {
      console.log('User already exists, skipping insertion.');
    } else {
      console.log('User inserted successfully.');
    }
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};