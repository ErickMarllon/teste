const { body } = require('express-validator');

const registerValidation = () => {
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
    body('senha')
      .notEmpty()
      .withMessage('A senha é obrigatória.')
      .isLength({ min: 6, max: 10 })
      .withMessage('O campo deve ter entre 6 e 10 caracteres.'),
  ];
};

module.exports = registerValidation();
