const express = require('express');
const router = express.Router();
const errorsValidate = require('../middlewares/errorsValidate');
const validarCampos = require('../middlewares/validarCampos');
const cadastrarClienteValidation = require('../middlewares/cadastrarClienteValidation');
const cadastrarCliente = require('../controllers/clientes/cadastrarCliente');
const checkToken = require('../guard/checarToken');
const listarClientes = require('../controllers/clientes/listarClientes');
const filtrarClientes = require('../controllers/clientes/filtrarClientes');
const melhorRota = require('../controllers/clientes/melhorRota');

router.get('/', checkToken, listarClientes);
router.get('/rota', checkToken, melhorRota);
router.get('/q?:query', checkToken, filtrarClientes);

router.post(
  '/cadastrar',
  checkToken,
  validarCampos,
  cadastrarClienteValidation,
  errorsValidate,
  cadastrarCliente,
);
module.exports = router;
