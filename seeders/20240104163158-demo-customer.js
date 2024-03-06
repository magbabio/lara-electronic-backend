'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [customer, created] = await queryInterface.sequelize.models.customers.findOrCreate({
      where: {
        email: 'magbabio@gmail.com'
      },
      defaults: {
        document_type: 'V',
        document_number: '28348251',
        first_name: 'Mariel',
        last_name: 'García',
        address: 'Calle 55-A',
        phone: '0424-5269633',
        email: 'magbabio@gmail.com',
        notes: 'Software Engineer',
        status: true,
        created_at: new Date(),
        updated_at: new Date()
      }
    });

    if (!created) {
      console.log('Customer already exists, skipping insertion.');
    } else {
      console.log('Customer inserted successfully.');
    }
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('customers', null, {});
  }
};