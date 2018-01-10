// GET /user -> hello user
// GET /user/5 -> hello user 5
// GET /user/5/items -> hello items from user 5
// GET /user/5/items/6 -> hello item 6 from user 5

const express = require('express');
const userRouter = express.Router();
const userController = require('./controller');

// you need to set mergeParams: true on the router,
// if you want to access params from the parent router
var postsRouter = express.Router({mergeParams: true});
// you can nest routers by attaching them as middleware:
userRouter.use('/:userId/posts', postsRouter);

userRouter.route('/')
  .get(userController.list)
  .post(userController.create);

userRouter.route('/:userId')
  .get(userController.findById);

postsRouter.route('/')
  .get((req, res) => {
    res.json({'data': 'Fetch all posts of a user'});
  });

postsRouter.route('/:postId')
  .get((req, res) => {
    res.json({'data': 'Fetch one post of user'});
  });

module.exports = userRouter;
