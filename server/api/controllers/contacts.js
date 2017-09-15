'use strict';
var Contacts = require('../models/contacts');

var contactsController = {};

contactsController.handleError =  function (res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}
contactsController.listContacts = function (req, res) {
    Contacts.fetchAllContacts(req, res);
}

module.exports = contactsController;