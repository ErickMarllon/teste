const insertClient = require('../../services/insertClient');
const insertClientCoordinate = require('../../services/insertClientCoordinate');
const verificarUsuario = require('../../services/verificarUsuario');

const cadastrarCliente = async (req, res) => {
  try {
    const { nome, email, telefone, coordenada_x, coordenada_y } = req.body;

    const usuario = await verificarUsuario(email);

    if (usuario) {
      throw { message: 'Já existe cliente com este e-mail', path: 'email' };
    }

    const novoRegistro = await insertClient(nome, email, telefone);

    if (!novoRegistro) {
      throw new Error('Erro ao registrar usuário');
    }
    const { id: cliente_id } = novoRegistro;
    const coordenada = await insertClientCoordinate(
      cliente_id,
      coordenada_x,
      coordenada_y,
    );

    res.status(201).json({ ...novoRegistro, ...coordenada });
  } catch (error) {
    res.status(422).json(error);
  }
};
module.exports = cadastrarCliente;
