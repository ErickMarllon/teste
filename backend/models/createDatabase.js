const db = require('../config/conn');
const { admSchema, clientSchema, coordenadasSchema } = require('./schemas');

async function createDataBase() {
  const client = await db();
  try {
    await Promise.all([
      client.query(admSchema),
      client.query(clientSchema),
      client.query(coordenadasSchema),
    ]);
    console.log('Tabelas criadas com sucesso.');
  } catch (error) {
    console.error('Erro ao criar tabelas:', error);
  } finally {
    client.release();
  }
}

module.exports = createDataBase;
