const { Company } = require('../models');
const response = require('../utils/responses');
const { Sequelize } = require('sequelize');

const createCompany = async (req, res) => {

  try {

    const { document_type, document_number, name, address, phone, email} = req.body;

    const company = await Company.findOne({ 
      where: 
      { document_type, 
        document_number,
        status: true } 
    });
    
    if (company) {

      response.makeResponsesError(res, 'CompanyFound')

      } else {
      
      const newCompany = await Company.create({
        document_type,
        document_number,
        name,
        address,
        phone,
        email
      });

      const saveCompany = await newCompany.save();

      response.makeResponsesOkData(res, saveCompany, 'CompanyCreated')

      }

  } catch (error) {
        
    response.makeResponsesError(res, error, 'UnexpectedError')

  }
}

const updateCompany = async (req, res) => {

  try {  

    const id = req.params.id;

    const company = await Company.findOne({
      where: {
        id: id,
        status: true
      }
    });

    if (!company) {

      return response.makeResponsesError(res, `Company not found or inactive`, 'CompanyNotFound')

    } else {

    const data = req.body;

    const saveCompany = await Company.update(data, {
      where: { id: req.params.id }
    });

    response.makeResponsesOkData(res, saveCompany, 'CompanyUpdated')

    }

  } catch (error) {
    
    response.makeResponsesError(res, error, 'UnexpectedError')

  }
}

const deleteCompany = async (req, res) => {

  try {

    const id = req.params.id;

    const company = await Company.findOne({
      where: {
        id: id,
        status: true
      }
    });

    if (!company) {
      return response.makeResponsesError(res, `Company not found or inactive`, 'CompanyNotFound')
    }

    const saveCompany = await company.update({
      status: false,
      deleted_at: Date.now(),
      where: { id }
    });

    response.makeResponsesOkData(res, saveCompany, 'CompanyDeleted')


  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')

  }
}

const activateCompany = async (req, res) => {

  try {

    const id = req.params.id;

    const company = await Company.findOne({
      where: {
        id: id,
        status: false
      }
    });

    if (!company) {
      return response.makeResponsesError(res, `Company not found or active`, 'CompanyNotFound')
    }

    const saveCompany = await company.update({
      status: true,
      where: { id }
    });

    response.makeResponsesOkData(res, saveCompany, 'CompanyActivated')


  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')

  }
}

const getCompany = async (req, res) => {
  try {
    const id = req.params.id;

    const company = await Company.findOne({
      where: {
        id: id,
        status: true
      }
    });

    if (!company) {
      return response.makeResponsesError(res, `Company not found or inactive`, 'CompanyNotFound');
    }

    return response.makeResponsesOkData(res, company, 'Success');

  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')
  }
}

const getAllCompanies = async (req, res) => {
  try {

    const companies = await Company.findAll({
      where: {
        status: true
      },
      order: [['created_at', 'DESC']]
    });

    if (customers.length == 0) {
      return response.makeResponsesError(res, 'Not found', 'CompaniesNotFound');
    }

    response.makeResponsesOkData(res, companies, 'Success')

  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')
  }
}

const getAllDeletedCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll({
      where: {
        status: false
      },
      order: [['deleted_at', 'DESC']]
    });

    if (customers.length == 0) {
      return response.makeResponsesError(res, 'Not found', 'CompaniesNotFound');
    }

    response.makeResponsesOkData(res, companies, 'Success')

  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')
  }
}

module.exports = {
  createCompany: createCompany,
  updateCompany: updateCompany,
  deleteCompany: deleteCompany,
  activateCompany: activateCompany,
  getCompany: getCompany,
  getAllCompanies: getAllCompanies,
  getAllDeletedCompanies: getAllDeletedCompanies
}; 