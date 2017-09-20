'use strict';
var Contacts = require('../models/contacts');

var contactsController = {};

contactsController.handleError =  function (res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}
contactsController.listContacts = function (req, res) {
    Contacts.fetchAllContacts(req.app.db, function(err, result){
        console.log(result);
        if (err) {
            this.handleError(res, 'Collection error', err, 500);
        }
        res.json(result);
    });
}

module.exports = contactsController;