'use strict';
var Contacts = require('../controllers').Contact;

module.exports = function (app) {
    app.get("contacts", app.app.oauth.authorise(), Contacts.listContacts);
    app.post("contacts", Contacts.createContact);
    app.get("contacts/:id", Contacts.findOneContact);
    app.put("contacts/:id", Contacts.updateContact);
    app.delete("contacts/:id", Contacts.deleteContact);
}