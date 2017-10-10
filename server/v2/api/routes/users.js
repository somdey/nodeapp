'use strict';
var User = require('../controllers').User;

module.exports = function (app) {
    //app.get("contacts", Contacts.listContacts);
    app.post("users", User.validate, User.create);
    //app.put("contacts/:id", Contacts.updateContact);
    //app.delete("contacts/:id", Contacts.deleteContact);
}