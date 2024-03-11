const { body } = require('express-validator');

const cadastrarClienteValidation = () => {
  return [
    body('nome')
      .notEmpty()
      .withMessage('O nome é obrigatório.')
      .isString()
      .withMessage('Nome inválido.'),
    body('email')
      .notEmpty()
      .withMessage('O email é obrigatório.')
      .isEmail()
      .withMessage('Email inválido.'),
    body('telefone')
      .notEmpty()
      .withMessage('O telefone é obrigatório.')
      .isLength({ min: 11, max: 11 })
      .withMessage('O campo deve ter 11 caracteres.'),
    body('coordenada_x')
      .notEmpty()
      .withMessage('O coordenada x é obrigatória.')
      .isNumeric()
      .withMessage('O campo coordenada x deve ser um número.'),
    body('coordenada_y')
      .notEmpty()
      .withMessage('O coordenada y é obrigatória.')
      .isNumeric()
      .withMessage('O campo coordenada y deve ser um número.'),
  ];
};

module.exports = cadastrarClienteValidation();
