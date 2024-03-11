const searchClients = require('../../services/searchClient');

const filtrarClientes = async (req, res) => {
  try {
    const filtro = req.query.filtro;
    const clientes = await searchClients(filtro);
    res.status(201).json(clientes);
  } catch (error) {
    res.status(422).json(error);
  }
};
module.exports = filtrarClientes;
