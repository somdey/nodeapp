const express = require('express');
const postsRouter = express.Router();
const postsController = require('./controller');
postsRouter.route('/posts')
  .get(postsController.list)
  .post(postsController.create);

postsRouter.route('/posts/:id')
  .get(postsController.findById);

module.exports = postsRouter;
