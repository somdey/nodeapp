'use strict';

var Promise = require('bluebird');
var Users = Promise.promisifyAll(require('../models/users'));
var userController = {};

userController.create = function (req, res) {
  var newUser = req.body;
  if (newUser.username && newUser.password) {
    Users.createAsync(newUser).then(function(data) {
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


module.exports = userController;