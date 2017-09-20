'use strict';

var Contacts = require('../models/contacts');

var contactsController = {};

contactsController.handleError =  function (res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}
contactsController.listContacts = function (req, res) {
    Contacts.fetchAllContacts(req.app.db, function(err, result){
        if (err) contactsController.handleError(res, err, err, 500);
        res.json(result);
    });
}
contactsController.CreateContacts = function (req, res) {
    var newContact = req.body;
    console.log(req);
    newContact.createDate = new Date();
    Contacts.createContacts(req.app.db, newContact, function(err, result) {
        if (err) contactsController.handleError(res, err, err, 500);
        res.json(result);
    });
}

module.exports = contactsController;