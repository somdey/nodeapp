var apiv = require('api-version');
var express = require("express");
var app = express();

var middleware = require('./middleware');
app.use(middleware.bodyParser.json());

var api = apiv.version(app, '/api', 'v1/');

api.get('/', function(req, res) {
  res.send('Welcome to api server');
});

// API VERSION ROUTES
require('./api/routes/contacts')(api);

app.listen(3000);
console.log("Listening on port 3000");