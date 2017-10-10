'use strict';
var Contacts = require('../controllers/contacts');

module.exports = function (app, router) {
    router.get('/', Contacts.listContacts);
    router.post('/', Contacts.createContact);
    router.get('/:id', Contacts.findOneContact);
    router.put('/:id', Contacts.updateContact);
    router.delete("/:id", Contacts.deleteContact);
    app.use('/api/contacts', router);
}
