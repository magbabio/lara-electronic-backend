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

module.exports = {
  createUser: createUser
};