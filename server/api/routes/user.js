'use strict';
var User = require('../controllers/user');

module.exports = function (app, router) {
    router.get('/', User.list);
    router.post('/', User.create);
    router.get('/:id', User.findById);
    router.put('/:id', User.update);
    router.delete("/:id", User.delete);
    app.use('/api/user', router);
}