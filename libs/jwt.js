require('dotenv').config();

function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload, 
      SECRET_KEY, 
      { 
        expiresIn: "1d" 
      }, 
      (err, token) => {
      if (err) reject(err);
      resolve(token);
      }
    );
  });
}

module.exports = {
  createAccessToken: createAccessToken
}; 