const { User } = require('../models');
const response = require('../utils/responses');
const { createAccessToken } = require('../libs/jwt');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

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

      response.makeResponsesError(res, `Authentication denied`, 'UserBlocked')

    } else {

    const valPass = await bcrypt.compare(password, valUser.password);

    if (!valPass) {
      return response.makeResponsesError(res, `Incorrect credentials`, 'UserLoginErrorP')
    }

    const token = await createAccessToken({id: valUser.id});

    res.cookie("token", token, {
      secure: false,
    });

    response.makeResponsesOkData(res, valUser,  token, 'UserLogin')

  }
    
  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')
  }
}

const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return response.makeResponsesError(res, `No token`, 'NoToken')

  jwt.verify(token, process.env.SECRET_KEY, async (error, decodedToken) => {
    if (error) {
      response.makeResponsesError(res, error, 'NoToken')
    }

    const user = await User.findByPk(decodedToken.id, {
      where: {
        status: true
      }
    });

    if (!user) return response.makeResponsesError(res, `User doesn't exist`, 'UserNotFound')

    return response.makeResponsesOkData(res, user)
  });
}

const logout = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      secure: true,
      expires: new Date(0),
    });
    response.makeResponsesOk(res, 'UserLogout')
  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')
  }
}

module.exports = {
  login: login,
  logout: logout,
  verifyToken: verifyToken
}; 