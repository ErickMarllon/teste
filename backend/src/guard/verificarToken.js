const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env.jwt' });
const jwtSecret = process.env.JWT_SECRET;

const verificarToken = (token) => {
  return jwt.verify(token, jwtSecret);
};

module.exports = verificarToken;
