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
 
exports.createContact = function(newContact) {
  return new Promise(function(resolve, reject) {
    var contact = new Contacts(newContact);
    contact.save(function (err, contact) {
      if (err) {
        reject(err);
      }
      else {
        resolve(contact);
      }
    });
  });
}

exports.fetchAllContacts = function () {
  return new Promise(function(resolve, reject) {
    Contacts.find({}, "-__v", function (err, contacts) {
      if (err) {
        reject(err);
      }else {
        resolve(contacts);
      }
    });
  });
}

exports.findById = function(id) {
  return new Promise(function(resolve, reject) {
    Contacts.find({_id: id}, function (err, contacts) {
      // Todo : We need to handle error in case of invalid obj id.
      console.log(err);
      console.log(contacts);
      if (err) {
        reject(err);
      } else {
        resolve(contacts);
      }
    });
  });
}

exports.updateContact = function(id, updateDoc) {
  return new Promise(function(resolve, reject) {
    Contacts.update({_id: id}, updateDoc, function (err) {
      Contacts.find({_id: id}, function (err, contacts) {
        if (err) {
          reject(err);
        } else {
          resolve(contacts);
        }
      });
    });
  });
}

exports.deleteContact = function(id) {
  return new Promise(function(resolve, reject) {
    Contacts.remove({_id: id}, function (err, contacts) {
      if (err) {
        reject(err);
      } else {
        resolve(contacts);
      }
    });
  });
}