const admSchema = `
CREATE TABLE IF NOT EXISTS admin (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  telefone VARCHAR(11),
  senha VARCHAR(100)
);
`;

const clientSchema = `
CREATE TABLE IF NOT EXISTS clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  telefone VARCHAR(11) NOT NULL
);
`;
const coordenadasSchema = `
CREATE TABLE IF NOT EXISTS coordenadas (
  id SERIAL PRIMARY KEY,
  cliente_id INTEGER UNIQUE NOT NULL,
  coordenada_x DOUBLE PRECISION NOT NULL,
  coordenada_y DOUBLE PRECISION NOT NULL,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);
`;
module.exports = { admSchema, clientSchema, coordenadasSchema };
