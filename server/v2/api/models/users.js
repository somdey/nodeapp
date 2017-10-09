'use strict';
var db = require('../../db');
var bcrypt = require('bcrypt-nodejs');
 
const COLLECTION = 'users';

var userSchema = db.mongoose.Schema({
  name: String,
  email: String,
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now()
  }
}, { versionKey: false});

var Users = db.mongoose.model(COLLECTION, userSchema);
 
exports.create = function(newUser, callback) {
  var user = new Users(newUser);
  user.save(function(err, user) {
    if (err) callback(err);
    callback(null, user);
  });
}

exports.findById = function(id, callback) {
  Users.find({_id: id}, function (err, user) {
    // Todo : We need to handle error in case of invalid obj id.
    console.log(err);
    console.log(user);
    if (err) callback(err); 
    callback(null, user);
  });
}
