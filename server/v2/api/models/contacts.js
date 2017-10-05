'use strict';
var db = require('../../db');
 
const CONTACTS_COLLECTION = 'contacts';

var ContactsSchema = db.mongoose.Schema({
  name: String,
  createdDate: {
    type: Date,
    default: Date.now()
  }
}, { versionKey: false});

var Contacts = db.mongoose.model(CONTACTS_COLLECTION, ContactsSchema);
 
exports.createContact = function(newContact, callback) {
  var contact = new Contacts(newContact);
  contact.save(function (err, contact) {
    return callback(err, contact);
  });
}

exports.fetchAllContacts = function (callback) {
  Contacts.find({}, "-__v", function (err, contacts) {
    callback(err, contacts);
  });
}

exports.findById = function(id, callback) {
  Contacts.find({_id: id}, function (err, contacts) {
    callback(err, contacts);
  });
}

exports.updateContact = function(id, updateDoc, callback) {
  Contacts.update({_id: id}, updateDoc, function (err) {
    Contacts.find({_id: id}, function (err, contacts) {
      callback(err, contacts);
    });
  });
}

exports.deleteContact = function(id, callback) {
  Contacts.remove({_id: id}, function (err, contacts) {
    callback(err, contacts);
  });
}