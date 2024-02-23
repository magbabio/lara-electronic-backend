'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('companies', [{
      document_type:'J',
      document_number:'12345678',
      name: 'LARA ELECTRONICA',
      address: 'CALLE 49 ENTRE CARRERAS 15 Y 16',
      phone: '0424-5004176 / 0414-5134750 / 0424-5181840',
      email: 'electronicaysistemaslara@gmail.com',
      status: true,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('companies', null, {});
  }
};
