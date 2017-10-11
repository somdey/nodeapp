'use strict';
const CONTACTS_COLLECTION = 'contacts'; 

var bookshelf = require('../../db');
// Pass an initialized bookshelf instance
var ModelBase = require('bookshelf-modelbase')(bookshelf);

var Contacts = ModelBase.extend({
  tableName: CONTACTS_COLLECTION
});

// exports.fetchAllContacts = function (callback) {
//   database.getDb(function(err, db) {
//     db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
//       return callback(err, docs);
//     });
//   });
// }

exports.createContact = function(newContact, callback) {
  Contacts.create(newContact)
  .then(function (err) {
    callback(err);
  }, function(result){
    callback(null, result);
  })
}

// exports.findById = function(id, callback) {
//   database.getDb(function(err, db) {
//     db.collection(CONTACTS_COLLECTION).findOne({ _id: new ObjectID(id) }, function(err, docs) {  
//       return callback(err, docs);
//     });
//  });
// }

// exports.updateContact = function(id, updateDoc, callback) {
//   database.getDb(function(err, db) {
//     db.collection(CONTACTS_COLLECTION).updateOne({_id: new ObjectID(id)}, updateDoc, function(err, docs) {
//       updateDoc._id = id;
//       return callback(err, updateDoc);
//     });
//   });
// }

// exports.deleteContact = function(id, callback) {
//   database.getDb(function(err, db) {
//     db.collection(CONTACTS_COLLECTION).deleteOne({_id: new ObjectID(id)}, function(err, result) { 
//       return callback(err, id);
//     });
//   });
// }

