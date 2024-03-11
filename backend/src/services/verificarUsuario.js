const db = require('../../config/conn');

async function verificarUsuario(email, clientes = true, returnBoolean = true) {
  const client = await db();
  const dataBase = clientes ? 'clientes' : 'admin';

  try {
    const query = `SELECT * FROM ${dataBase} WHERE email = $1`;
    const result = await client.query(query, [email]);
    return returnBoolean ? result.rows.length > 0 : result.rows[0];
  } catch (error) {
    error.message = 'Ocorreu um erro, tente novamente mais tarde.';
    return error;
  } finally {
    client.release();
  }
}
module.exports = verificarUsuario;
