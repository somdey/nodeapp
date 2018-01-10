const express = require('express');
const userRouter = express.Router();
const userController = require('./controller');
userRouter.route('/users')
    .get(userController.list)
    .post(function(req, res){
      res.status(200)
      .send('hello post users');
    });

userRouter.route('users/:userId')
    .get(function (req, res) {
        res.status(200)
            .send('hello user ' + req.params.userId);
    });

module.exports = userRouter;
