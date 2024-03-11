function extrairTokenHeaders(req) {
  const authorization = req?.headers['authorization'];
  if (!authorization) {
    throw { status: 422, message: 'Usuário não autenticado' };
  }
  const token = authorization.split(' ')[1];
  if (!token || token.length < 10) {
    throw { status: 422, message: 'Token inválido' };
  }
  return token;
}
module.exports = extrairTokenHeaders;
