
'use strict';
const express = require('express');
const app = express();
const router = express.Router();

// Define routes.
let routes = [
  'users',
  'posts'
];
let apiBasePath = '/api';
routes.forEach(route => {
  router.use(apiBasePath + '/' + route, require('./' + route));
});

module.exports = router;