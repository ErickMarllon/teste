const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;

const gerarToken = (id) => {
  return jwt.sign({ id }, jwtSecret, { expiresIn: '1d' });
};

module.exports = gerarToken;
