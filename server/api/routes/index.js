
'use strict';
const User = require('../controllers/user');

module.exports = (app, router) => {
  router.get('/', (req, res) => {
    res.json({"Message": "Welcome to api"})
  })
  
  router.get('/user', User.list);
  router.post('/user', User.create);
  router.get('/user/:id', User.findById);
  router.put('/user/:id', User.update);
  router.delete("/user/:id", User.delete);
  router.post('/authenticate', User.authenticate);

  app.use('/api', router);
}
