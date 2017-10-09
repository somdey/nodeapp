var apiv = require('api-version');
var express = require("express");
var app = express();

var middleware = require('./middleware')(app);


var api = apiv.version(app, '/api', 'v2/');

api.get('/', function(req, res) {
  res.send('Welcome to api server');
});

// API VERSION ROUTES
require('./api/routes/contacts')(api);
require('./api/routes/users')(api);

app.listen(3001);
console.log("Listening on port 3001");