
'use strict';
const express = require('express');
const app = express();
const router = express.Router();

// Define routes.
let routes = [
  'users',
  'post'
];
let apiBasePath = '/api';
routes.forEach(route => {
  router.use(apiBasePath + '/' + route, require('./' + route));
});

router.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

router.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = router;