'use strict';

var Promise = require('bluebird');
var Users = Promise.promisifyAll(require('../models').User);
var userController = {};

userController.create = function (req, res) {
  var newUser = req.body;
  if (newUser.username && newUser.password) {
    Users.registerAsync(newUser).then(function(data) {
      res.json(data);
    }, function(err) {
      res.json({"error": err});
    });
  } else {
    res.json({"error": "Request body is empty"});
  }
}

userController.findOne = function (req, res) {
  if (req.params.id) {
    Users.findByIdAsync(req.params.id).then(function(data) {
      res.json(data);
    }, function(err) {
      res.json({"error": err});
    });
  } else {
    res.json({"error": "Property id is missing"});
  }
}

userController.validate = function (req, res, next) {
  req.checkBody('username', 'username can not be empty').notEmpty();
  req.checkBody('password', 'password should be numeric').isNumeric();

  var errors = req.validationErrors();
  if (errors) {
    var response = { errors: [] };
    errors.forEach(function(err) {
      response.errors.push(err.msg);
    });
    res.statusCode = 400;
    return res.json(response);
  }
  return next();
 }

module.exports = userController;