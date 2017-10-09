'use strict';
var Users = require('../controllers/users');

module.exports = function (app) {
    //app.get("contacts", Contacts.listContacts);
    app.post("users", Users.create);
    app.get("users/:id", Users.findOne);
    //app.put("contacts/:id", Contacts.updateContact);
    //app.delete("contacts/:id", Contacts.deleteContact);
}