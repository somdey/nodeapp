'use strict';
var Contacts = require('../controllers/contacts');

module.exports = function (app) {
    app.get("/api/contacts", Contacts.listContacts);
    app.post("/api/contacts", Contacts.createContact);
    app.get("/api/contacts/:id", Contacts.findOneContact);
    app.put("/api/contacts/:id", Contacts.updateContact);
    app.delete("/api/contacts/:id", Contacts.deleteContact);
}