'use strict';
var Contacts = require('../controllers/contacts');

module.exports = function (app) {
    app.get("/api/contacts", Contacts.listContacts);
}