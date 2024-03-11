const db = require('../../config/conn');

async function searchClients(filtro) {
  const client = await db();

  let values = [`%${filtro}%`];

  try {
    const qSearchClientes = `
    SELECT * FROM clientes
    WHERE nome LIKE $1
    OR telefone LIKE $1
    OR email LIKE $1`;

    const result = await client.query(qSearchClientes, values);
    return result.rows;
  } finally {
    client.release();
  }
}

module.exports = searchClients;
