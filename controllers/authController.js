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
      sameSite: "strict",
    });

    return res.json({
      id: valUser.id,
      email:valUser.email,
      first_name: valUser.first_name,
      last_name: valUser.last_name,
      role: valUser.role,
      token: token
  });

  }
    
  } catch (error) {
    console.log('holaaaaaaaaa',error);
    response.makeResponsesError(res, error, 'UnexpectedError')
  }
}

const verifyToken = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ message: "Unauthorized" });
  
    jwt.verify(token, process.env.SECRET_KEY, async (error, user) => {
        if (error) {
          return res.status(401).json({ message: "Unauthorized" });
        }
        
      const userFound = await User.findByPk(user.id);
      if (!userFound) return res.sendStatus(401).json({ message: "Unauthorized" });
  
      return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
      });
    });
};

const logout = async (req, res) => {
  res.cookie("token", "", {
      httpOnly: true,
      secure: true,
      expires: new Date(0),
    });
    return res.sendStatus(200);
};

module.exports = {
  login: login,
  logout: logout,
  verifyToken: verifyToken
}; 