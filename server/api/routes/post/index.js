const express = require('express');
const postsRouter = express.Router();
const postsController = require('./controller');
postsRouter.route('/')
  .get(postsController.list)
  .post(postsController.create);

postsRouter.route('/:id')
  .get(postsController.findById);

module.exports = postsRouter;
