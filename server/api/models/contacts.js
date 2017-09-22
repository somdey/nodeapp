'use strict';
const CONTACTS_COLLECTION = 'contacts'; 

//var ObjectID = require('mongodb').ObjectID;

var Mongoose = require("mongoose");

var Schema = Mongoose.Schema;

var ObjectId = Mongoose.SchemaTypes.ObjectId;
 
var ContactsSchema = new Mongoose.Schema({
    name: String,
    createdDate: {
      type: Date,
      // `Date.now()` returns the current unix timestamp as a number
      default: Date.now
    }
});
 
var ContactsModel = Mongoose.model(CONTACTS_COLLECTION, ContactsSchema);

exports.fetchAllContacts = function (db, callback) {
  db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
    return callback(err, docs);
  });
}

exports.createContact = function(req, newContact, callback) {
  // req.app.db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, docs) {  
  //    return callback(err, docs.ops[0]);
  // });
  // Mongoose.
  var contact = new ContactsModel(newContact);
  contact.save(function(err, contact) {
      return callback(err, contact);
  });
}

exports.findById = function(db, id, callback) {
  db.collection(CONTACTS_COLLECTION).findOne({ _id: new ObjectID(id) }, function(err, docs) {  
    return callback(err, docs);
  });
}

exports.updateContact = function(db, id, updateDoc, callback) {
  db.collection(CONTACTS_COLLECTION).updateOne({_id: new ObjectID(id)}, updateDoc, function(err, docs) {
    updateDoc._id = id;
    return callback(err, updateDoc);
  });
}

exports.deleteContact = function(db, id, callback) {
  db.collection(CONTACTS_COLLECTION).deleteOne({_id: new ObjectID(id)}, function(err, result) { 
    return callback(err, id);
  });
}

