'use strict';

var User = require('../models').User;

module.exports = {
  list : function (req, res) {
    User.findAll().then(users => {
      res.json(users);
    })
  },
  create : function(req, res) {
    if (req.body.email && req.body.password) {
      User.findOrCreate({where: {email: req.body.email}, defaults: req.body}).spread((user, created) => {
        res.json(user.get({
          plain: true
        }));
      })
    }
  },
  findById : function (req, res) {
    res.json({'data': 'findbyid'});
  },
  update : function(req, res) {
    res.json({'data': 'update'});
  },
  delete : function(req, res) {
    res.json({'data': 'delete'});
  }
}