const db = require('../../config/conn');
async function insertClient(nome, email, telefone) {
  const client = await db();
  try {
    const qInsertClient =
      'INSERT INTO clientes (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *';
    const result = await client.query(qInsertClient, [nome, email, telefone]);
    return result.rows[0];
  } finally {
    client.release();
  }
}
module.exports = insertClient;
