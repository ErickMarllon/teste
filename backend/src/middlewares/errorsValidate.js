const { validationResult } = require('express-validator');

const errorsValidate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const firstError = errors.array()[0];

  const error = {
    message: firstError.msg,
    path: firstError.path,
  };

  return res.status(422).json(error);
};

module.exports = errorsValidate;
