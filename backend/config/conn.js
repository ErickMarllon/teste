const { Pool } = require('pg');

async function db() {
  if (global.connection) {
    return await global.connection.connect();
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  global.connection = pool;
  return await pool.connect();
}
module.exports = db;
