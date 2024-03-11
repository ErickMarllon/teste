const listClients = require('../../services/listClients');

const listarClientes = async (req, res) => {
  try {
    const clientes = await listClients();

    res.status(201).json(clientes);
  } catch (error) {
    res.status(422).json(error);
  }
};
module.exports = listarClientes;
