'use strict';
var Contacts = require('../controllers/contacts');

module.exports = function (app) {
    app.get("contacts", Contacts.listContacts);
    app.post("contacts", Contacts.createContact);
    app.get("contacts/:id", Contacts.findOneContact);
    app.put("contacts/:id", Contacts.updateContact);
    app.delete("contacts/:id", Contacts.deleteContact);
}