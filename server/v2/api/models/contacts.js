'use strict';
const CONTACTS_COLLECTION = 'contacts'; 

var ObjectID = require('mongodb').ObjectID;

var database = require('../../db');
 
exports.fetchAllContacts = function (callback) {
  database.getDb(function(err, db) {
    db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
      return callback(err, docs);
    });
  });
}

exports.createContact = function(newContact, callback) {
  database.getDb(function(err, db) {
    db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, docs) {  
      return callback(err, docs.ops[0]);
    });
  });
}

exports.findById = function(id, callback) {
  database.getDb(function(err, db) {
    db.collection(CONTACTS_COLLECTION).findOne({ _id: new ObjectID(id) }, function(err, docs) {  
      return callback(err, docs);
    });
 });
}

exports.updateContact = function(id, updateDoc, callback) {
  database.getDb(function(err, db) {
    db.collection(CONTACTS_COLLECTION).updateOne({_id: new ObjectID(id)}, updateDoc, function(err, docs) {
      updateDoc._id = id;
      return callback(err, updateDoc);
    });
  });
}

exports.deleteContact = function(id, callback) {
  database.getDb(function(err, db) {
    db.collection(CONTACTS_COLLECTION).deleteOne({_id: new ObjectID(id)}, function(err, result) { 
      return callback(err, id);
    });
  });
}

