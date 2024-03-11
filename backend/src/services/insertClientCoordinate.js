const db = require('../../config/conn');
async function insertClientCoordinate(cliente_id, coordenada_x, coordenada_y) {
  const client = await db();
  try {
    const qInsertCoordinate =
      'INSERT INTO coordenadas (cliente_id, coordenada_x, coordenada_y) VALUES ($1, $2, $3) RETURNING coordenada_x, coordenada_y';
    const result = await client.query(qInsertCoordinate, [
      cliente_id,
      coordenada_x,
      coordenada_y,
    ]);
    return result.rows[0];
  } finally {
    client.release();
  }
}
module.exports = insertClientCoordinate;
