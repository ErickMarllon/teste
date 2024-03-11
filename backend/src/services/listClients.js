const db = require('../../config/conn');
async function listClients() {
  const client = await db();
  try {
    const qListClient =
      'SELECT cl.id, cl.nome, cl.email, cl.telefone, co.coordenada_x, co.coordenada_y FROM clientes cl INNER JOIN coordenadas co ON cl.id = co.cliente_id';
    const result = await client.query(qListClient);

    return result.rows;
  } finally {
    client.release();
  }
}
module.exports = listClients;
