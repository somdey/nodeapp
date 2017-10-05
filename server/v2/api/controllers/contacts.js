'use strict';

var Contacts = require('../models/contacts');
var middleware = require('../../middleware');

var contactsController = {};

contactsController.handleError =  function (res, message, code) {
  res.status(code || 500).json({"error": message});
}

contactsController.listContacts = function (req, res) {
  Contacts.fetchAllContacts().then(function(data) {
    res.json(data);
  }, function(err) {
    contactsController.handleError(res, err, err, 500);
  });
}

contactsController.createContact = function (req, res) {
  var newContact = req.body;
  if (newContact.name) {
    Contacts.createContact(newContact).then(function(data) {
      res.json(data);
    }, function(err) {
      contactsController.handleError(res, err, err, 500);
    }); 
  } else {
    contactsController.handleError(res, 'Request body is empty');
  }
}

contactsController.findOneContact = function (req, res) {
  if (req.params.id) {
    Contacts.findById(req.params.id).then(function(data) {
      res.json(data);
    }, function(err) {
      contactsController.handleError(res, err, err, 500);
    });
  } else {
    contactsController.handleError(res, 'Bad request');
  }
}

contactsController.updateContact = function (req, res) {
  var id;
  if (middleware.isEmptyObject(req.body)) {
    contactsController.handleError(res, 'Bad request');
  } else {
    id = req.params.id;
    var updateDoc = req.body;
    delete updateDoc._id;
    Contacts.updateContact(id, updateDoc, function(err, result) {
      if (err) contactsController.handleError(res, err);
      res.json(result);
    });
  }
}

contactsController.deleteContact = function (req, res) {
  var id;
  if (middleware.isEmptyObject(req.params)) {
    contactsController.handleError(res, 'Bad request');
  } else {
    id = req.params.id;
    Contacts.deleteContact(id, function(err, result) {
      if (err) contactsController.handleError(res, err);
      res.json(result);
    });
  }
}

module.exports = contactsController;