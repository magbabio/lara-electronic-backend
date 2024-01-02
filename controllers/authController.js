const { User } = require('../models');
const response = require('../utils/responses');
const { createAccessToken } = require('../libs/jwt');
const bcrypt = require('bcrypt');


const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const valUser = await User.findOne({ 
      where: 
      { email } 
    });

    if (!valUser) {
      response.makeResponsesError(res, `Incorrect credentials`, 'UserLoginErrorE')
    } else if (valUser.status == false) {
      response.makeResponsesError(res, `Authentication denied`, 'User blocked')
    }

    const valPass = await bcrypt.compare(password, valUser.password);

    if (!valPass) {
      return response.makeResponsesError(res, `Incorrect credentials`, 'UserLoginErrorP')
    }

    const token = await createAccessToken({id: valUser.id});

    res.cookie("token", token, {
      secure: false,
    });

    response.makeResponsesOkData(res, token, 'UserLogin')
    
  } catch (error) {
    
    response.makeResponsesError(res, error, 'UnexpectedError')

  }
}

module.exports = {
  login: login
}; 