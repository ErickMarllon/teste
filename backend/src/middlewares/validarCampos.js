const validarCampos = (req, res, next) => {
  const camposPermitidos = {
    register: ['nome', 'email', 'telefone', 'senha'],
    login: ['email', 'senha'],
    cadastrar: ['nome', 'email', 'telefone', 'coordenada_x', 'coordenada_y'],
  };

  const path = req.path.slice(1);

  const camposExtraneous = Object.keys(req.body).filter(
    (campo) => !camposPermitidos[path].includes(campo),
  );

  if (camposExtraneous.length > 0) {
    return res.status(400).json({
      message: `O campo ${camposExtraneous[0]} não existe`,
    });
  }

  next();
};

module.exports = validarCampos;
