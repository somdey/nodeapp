'use strict';
const CONTACTS_COLLECTION = 'contacts'; 

var bookshelf = require('../../db');
// Pass an initialized bookshelf instance
var ModelBase = require('bookshelf-modelbase')(bookshelf);

// We need to create the schema during deployment.
// bookshelf.knex.schema.createTable(CONTACTS_COLLECTION, function(t) {
//   t.increments('id');
//   t.string('first_name');
//   t.string('last_name');
//   t.timestamps();
// }).then(function (table) {
//   console.log('Created Table', table);
// });

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
  .then(function (result) {
    callback(null, result);
  }, function(err){
    callback(err);
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

