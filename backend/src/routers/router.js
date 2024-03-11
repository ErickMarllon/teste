const express = require('express');
const router = express();

router.use('/auth', require('./authRoutes'));
router.use('/clientes', require('./clientesRoutes'));

module.exports = router;
