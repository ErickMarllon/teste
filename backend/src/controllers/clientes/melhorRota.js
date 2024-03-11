const calcularRotaMaisCurta = require('../../services/calcularRotaMaisCurta');
const listClients = require('../../services/listClients');

const melhorRota = async (req, res) => {
  try {
    const clientes = await listClients();
    const rota = await calcularRotaMaisCurta(clientes);
    res.status(201).json(rota);
  } catch (error) {
    res.status(422).json(error);
  }
};
module.exports = melhorRota;
