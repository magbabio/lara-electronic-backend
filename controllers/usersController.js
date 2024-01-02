const { User } = require('../models');
const response = require('../utils/responses');
const bcrypt = require('bcrypt');


const createUser = async (req, res) => {

  try {

    const { document_type, document_number, first_name, last_name, phone, email, password, role } = req.body;

    const emailFound = await User.findOne({ 
      where: 
      { email, 
        status: true } 
    });

    const documentFound = await User.findOne({ 
      where: 
      { document_type,
        document_number, 
        status: true } 
    });
    
    if (emailFound) {

      response.makeResponsesError(res, `Email already in use`, 'UserFoundE')

    } else if (documentFound) {

      response.makeResponsesError(res, `Document already in use`, 'UserFoundD')

      } else {
      
      const newUser = await User.create({
        document_type,
        document_number,
        first_name,
        last_name,
        phone,
        email,
        password: bcrypt.hashSync(password, 10),
        role
      });

      const saveUser = await newUser.save();

      response.makeResponsesOkData(res, saveUser, 'UserCreated')

      }

  } catch (error) {
    
    response.makeResponsesError(res, error, 'UnexpectedError')

  }
}

const updateUser = async (req, res) => {

  try {    
    const user = await User.findByPk(req.params.id, {
      where: {
        status: true
      }
    });

    if (!user) {
      return response.makeResponsesError(res, `User doesn't exist`, 'UserNotFound')
    } else {

    user.document_type = req.body.document_type ? req.body.document_type : user.document_type
    user.document_number = req.body.document_number ? req.body.document_number : user.document_number
    user.first_name = req.body.first_name ? req.body.first_name : user.first_name
    user.last_name = req.body.last_name ? req.body.last_name : user.last_name
    user.phone = req.body.phone ? req.body.phone : user.phone
    user.last_name = req.body.last_name ? req.body.last_name : user.last_name
    user.phone = req.body.phone ? req.body.phone : user.phone
    user.email = req.body.email ? req.body.email : user.email
    user.role = req.body.role ? req.body.role : user.role

    await user.save()

    response.makeResponsesOkData(res, user, 'UserUpdated')

    }

  } catch (error) {

    console.log(error);
    
    response.makeResponsesError(res, error, 'UnexpectedError')

  }
}

const deleteUser = async (req, res) => {

  try {

    const id = req.params.id;

    const user = await User.findByPk(id, {
      where: {
        status: true
      }
    });

    if (!user) {
      return response.makeResponsesError(res, `User doesn't exist`, 'UserNotFound')
    }

    const saveUser = await user.update({
      status: false,
      where: { id }
    });

    response.makeResponsesOkData(res, saveUser, 'UserDeleted')


  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')

  }
}

const activateUser = async (req, res) => {

  try {

    const id = req.params.id;

    const user = await User.findByPk(id, {
      where: {
        status: false
      }
    });

    if (!user) {
      return response.makeResponsesError(res, `User doesn't exist`, 'UserNotFound')
    }

    const saveUser = await user.update({
      status: true,
      where: { id }
    });

    response.makeResponsesOkData(res, saveUser, 'UserActivated')


  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')

  }
}

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id, {
      where: {
        status: true
      }
    });
    response.makeResponsesOkData(res, user, 'Success')
  } catch (error) {
    console.log(error);
    response.makeResponsesError(res, error, 'UnexpectedError')
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        status: true
      },
      order: [['createdAt', 'DESC']]
    });

    response.makeResponsesOkData(res, users, 'Success')

  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')
  }
}

module.exports = {
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  activateUser: activateUser,
  getUser: getUser,
  getAllUsers: getAllUsers
}; 