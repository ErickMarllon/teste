const extrairTokenHeaders = require('./extrairTokenHeaders');
const verificarToken = require('./verificarToken');

function checkToken(req, res, next) {
  try {
    const token = extrairTokenHeaders(req);
    verificarToken(token);
    next();
  } catch (error) {
    res.status(500).json('Token inválido.');
  }
}
module.exports = checkToken;
