
'use strict';

const express = require('express');
const router = express.Router();
router.use('/api', require('./users'));

module.exports = router;