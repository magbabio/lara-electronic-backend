'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('companies', [{
      document_type:'J',
      document_number:'12345678',
      name: 'ELECTRÓNICA Y SISTEMAS LARA, C.A.',
      address: 'Av. Pedro León Torres Esq. Calle 55A',
      phone: '0251-4435613 0414-5134750 0424-5004176',
      email: 'electronicaysistemaslara@gmail.com',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('companies', null, {});
  }
};
