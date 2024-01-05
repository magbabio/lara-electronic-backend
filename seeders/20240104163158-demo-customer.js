'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', [{
      document_type:'V',
      document_number:'28348251',
      first_name: 'Mariel',
      last_name: 'García',
      address: 'Calle 55-A',
      phone: '0424-5269633',
      email: 'magbabio@gmail.com',
      notes: 'Software Engineer',
      status: true,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {});
  }
};
