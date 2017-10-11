'use strict';

var Promise = require('bluebird');
var Contacts = Promise.promisifyAll(require('../models/contacts'));

var contactsController = {};

contactsController.handleError =  function (res, message, code) {
  res.status(code || 500).json({"error": message});
}

contactsController.listContacts = function (req, res) {
  Contacts.fetchAllContactsAsync().then(function(data) {
    res.json(data);
  }, function(err) {
    contactsController.handleError(res, err, 500);
  });
}

contactsController.createContact = function (req, res) {
  var newContact = req.body;
  if (newContact.first_name) {
    newContact.created_at = new Date();
    newContact.updated_at = new Date();
    Contacts.createContactAsync(newContact).then(function(data) {
      res.json(data);
    }, function(err) {
      contactsController.handleError(res, err, 500);
    }); 
  } else {
    contactsController.handleError(res, 'Property name is missing');
  }
}

contactsController.findOneContact = function (req, res) {
  if (req.params.id) {
    var id = req.params.id;
    Contacts.findByIdAsync(id).then(function(data) {
      res.json(data);
    }, function(err) {
      contactsController.handleError(res, err, 500);
    });
  } else {
    contactsController.handleError(res, 'Bad request');
  }
}

contactsController.updateContact = function (req, res) {
  if (req.params.id && req.body.name) {
    var id = req.params.id;
    var updateDoc = req.body;
    delete updateDoc._id;
    Contacts.updateContactAsync(id, updateDoc).then(function(data) {
      res.json(data);
    }, function(err) {
      contactsController.handleError(res, err, 500);
    });
  } else {
    contactsController.handleError(res, 'Bad request: Multiple property missing.');
  }
}

contactsController.deleteContact = function (req, res) {
  if (req.params.id) {
    var id = req.params.id;
    Contacts.deleteContact(id).then(function(data) {
      res.json(data);
    }, function(err) {
      contactsController.handleError(res, err, 500);
    });
  } else {
    contactsController.handleError(res, 'Bad request: Id property missing.');
  }
}

module.exports = contactsController;