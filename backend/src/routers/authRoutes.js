const express = require('express');
const registerValidation = require('../middlewares/registerValidation');
const errorsValidate = require('../middlewares/errorsValidate');
const register = require('../controllers/auth/register');
const validarCampos = require('../middlewares/validarCampos');
const loginValidation = require('../middlewares/loginValidation');
const login = require('../controllers/auth/login');
const router = express.Router();

router.post(
  '/register',
  validarCampos,
  registerValidation,
  errorsValidate,
  register,
);
router.post('/login', validarCampos, loginValidation, errorsValidate, login);
module.exports = router;
