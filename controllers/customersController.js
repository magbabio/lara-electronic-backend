const { Customer } = require('../models');
const response = require('../utils/responses');
const { Sequelize } = require('sequelize');

const createCustomer = async (req, res) => {

  try {

    const { document_type, document_number, first_name, last_name, address, phone, email, notes } = req.body;

    const customer = await Customer.findOne({ 
      where: 
      { document_type, 
        document_number,
        status: true } 
    });
    
    if (customer) {

      response.makeResponsesError(res, `Customer found`, 'CustomerFound')

      } else {
      
      const newCustomer = await Customer.create({
        document_type,
        document_number,
        first_name,
        last_name,
        address,
        phone,
        email,
        notes
      });

      const saveCustomer = await newCustomer.save();

      response.makeResponsesOkData(res, saveCustomer, 'CustomerCreated')

      }

  } catch (error) {
        
    response.makeResponsesError(res, error, 'UnexpectedError')

  }
}

const updateCustomer = async (req, res) => {

  try {  

    const id = req.params.id;

    const customer = await Customer.findOne({
      where: {
        id: id,
        status: true
      }
    });

    if (!customer) {

      return response.makeResponsesError(res, `Customer not found`, 'CustomerNotFound')

    } else {

    const data = req.body;

    const saveCustomer = await customer.update(data, {
      where: { id: req.params.id }
    });

    response.makeResponsesOkData(res, saveCustomer, 'CustomerUpdated')

    }

  } catch (error) {
    
    response.makeResponsesError(res, error, 'UnexpectedError')

  }
}

const deleteCustomer = async (req, res) => {

  try {

    const id = req.params.id;

    const customer = await Customer.findOne({
      where: {
        id: id,
        status: true
      }
    });

    if (!customer) {
      return response.makeResponsesError(res, `Customer not found`, 'CustomerNotFound')
    }

    const saveCustomer = await customer.update({
      status: false,
      deleted_at: Date.now(),
      where: { id }
    });

    response.makeResponsesOkData(res, saveCustomer, 'CustomerDeleted')


  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')

  }
}

const activateCustomer = async (req, res) => {

  try {

    const id = req.params.id;

    const customer = await Customer.findOne({
      where: {
        id: id,
        status: false
      }
    });

    if (!customer) {
      return response.makeResponsesError(res, `Customer not found or active`, 'CustomerNotFound')
    }

    const saveCustomer = await customer.update({
      status: true,
      where: { id }
    });

    response.makeResponsesOkData(res, saveCustomer, 'CustomerActivated')


  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')

  }
}

const getCustomer = async (req, res) => {
  try {
    const id = req.params.id;

    const customer = await Customer.findOne({
      where: {
        id: id,
        status: true
      }
    });

    if (!customer) {
      return response.makeResponsesError(res, `Customer not found`, 'CustomerNotFound');
    }

    return response.makeResponsesOkData(res, customer, 'Success');

  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')
  }
}

const getAllCustomers = async (req, res) => {
  try {

    const customers = await Customer.findAll({
      where: {
        status: true
      },
      order: [['created_at', 'DESC']]
    });

    if (customers.length == 0) {
      return response.makeResponsesError(res, 'Not found', 'CustomersNotFound');
    }

    response.makeResponsesOkData(res, customers, 'Success')

  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')
  }
}

const getAllDeletedCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll({
      where: {
        status: false
      },
      order: [['deleted_at', 'DESC']]
    });

    if (customers.length == 0) {
      return response.makeResponsesError(res, 'Not found', 'CustomersNotFound');
    }

    response.makeResponsesOkData(res, customers, 'Success')

  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')
  }
}

const getCustomerByDocument = async (req, res) => {
  try {
    const { document_type, document_number } = req.params;

    const customer = await Customer.findOne({
      where: {
        document_type: document_type,
        document_number: document_number,
        status: true
      }
    });

    if (!customer) {
      return response.makeResponsesError(res, 'Customer not found', 'CustomerNotFound');
    }

    return response.makeResponsesOkData(res, customer, 'Success');
  } catch (error) {
    console.log(error);
    response.makeResponsesError(res, error, 'UnexpectedError');
  }
};

module.exports = {
  createCustomer: createCustomer,
  updateCustomer: updateCustomer,
  deleteCustomer: deleteCustomer,
  activateCustomer: activateCustomer,
  getCustomer: getCustomer,
  getAllCustomers: getAllCustomers,
  getAllDeletedCustomers: getAllDeletedCustomers,
  getCustomerByDocument: getCustomerByDocument
}; 