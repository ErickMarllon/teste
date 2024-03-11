const { body } = require('express-validator');

const loginValidation = () => {
  return [
    body('email')
      .notEmpty()
      .withMessage('O email é obrigatório.')
      .isEmail()
      .withMessage('Email inválido.'),
    body('senha').notEmpty().withMessage('A senha é obrigatória.'),
  ];
};

module.exports = loginValidation();
