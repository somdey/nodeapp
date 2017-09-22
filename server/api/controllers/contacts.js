'use strict';

var Contacts = require('../models/contacts');
var middleware = require('../../middleware');

var contactsController = {};

contactsController.handleError =  function (res, message, code) {
  res.status(code || 500).json({"error": message});
}

contactsController.listContacts = function (req, res) {
  Contacts.fetchAllContacts(req.app.db, function(err, result){
    if (err) contactsController.handleError(res, err, err, 500);
    res.json(result);
  });
}

contactsController.createContact = function (req, res) {
  var newContact = req.body;
  if (middleware.isEmptyObject(newContact)) {
      contactsController.handleError(res, 'Request body is empty');
  } else {
    newContact.createDate = new Date();
    Contacts.createContact(req, newContact, function(err, result) {
        if (err) contactsController.handleError(res, err, err, 500);
        res.json(result);
    });
  }
}

contactsController.findOneContact = function (req, res) {
  var id;
  if (middleware.isEmptyObject(req.params)) {
      contactsController.handleError(res, 'Bad request');
  } else {
    id = req.params.id;
    Contacts.findById(req.app.db, id, function(err, result) {
        if (err) contactsController.handleError(res, err);
        res.json(result);
    });
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
    Contacts.updateContact(req.app.db, id, updateDoc, function(err, result) {
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
    Contacts.deleteContact(req.app.db, id, function(err, result) {
      if (err) contactsController.handleError(res, err);
      res.json(result);
    });
  }
}

module.exports = contactsController;