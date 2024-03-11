const bcrypt = require('bcryptjs');
const gerarToken = require('../../guard/gerarToken');
const verificarUsuario = require('../../services/verificarUsuario');

const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const usuario = await verificarUsuario(email, false, false);

    if (!usuario) {
      throw { message: 'E-mail inválido', path: 'email' };
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      throw { message: 'Senha inválida', path: 'senha' };
    }

    const token = gerarToken(usuario.id);

    delete usuario.senha;

    res.status(201).json({ ...usuario, token });
  } catch (error) {
    res.status(422).json(error);
  }
};
module.exports = login;
