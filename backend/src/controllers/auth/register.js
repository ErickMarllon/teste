const gerarToken = require('../../guard/gerarToken');
const registerAdmin = require('../../services/registerAdmin');
const verificarUsuario = require('../../services/verificarUsuario');

const register = async (req, res) => {
  try {
    const { nome, email, telefone, senha } = req.body;

    const usuario = await verificarUsuario(email, false);

    if (usuario) {
      throw { message: 'Já existe usuário com este e-mail', path: 'email' };
    }

    const novoRegistro = await registerAdmin(nome, email, telefone, senha);

    if (!novoRegistro) {
      throw new Error('Erro ao registrar usuário');
    }

    const token = gerarToken(novoRegistro.id);

    res.status(201).json({ ...novoRegistro, token });
  } catch (error) {
    res.status(422).json(error);
  }
};
module.exports = register;
