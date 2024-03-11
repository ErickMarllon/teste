const db = require('../../config/conn');
const bcrypt = require('bcryptjs');

async function registerAdmin(nome, email, telefone, senha) {
  const client = await db();
  try {
    const qInsertClient =
      'INSERT INTO admin (nome, email, telefone, senha) VALUES ($1, $2, $3, $4) RETURNING *';

    const salt = await bcrypt.genSalt();
    const senhaHash = await bcrypt.hash(senha, salt);

    const result = await client.query(qInsertClient, [
      nome,
      email,
      telefone,
      senhaHash,
    ]);

    delete result.rows[0].senha;

    return result.rows[0];
  } finally {
    client.release();
  }
}
module.exports = registerAdmin;
