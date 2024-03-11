require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routers/router');
const createDataBase = require('../models/createDatabase');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const allowedOrigins = process.env.ALLOWED_ORIGINS;
const port = process.env.PORT;

app.use(
  cors({
    origin: allowedOrigins,
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    credentials: true,
  }),
);
app.use(router);

app.get('/', (req, res) => {
  res.send(`API Working!  ${port}`);
});

createDataBase();

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
