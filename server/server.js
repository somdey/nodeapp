var apiv = require('api-version');
var express = require("express");
var app = express();

var api = apiv.version(app, '/api', 'v2/');

require('./middleware')(app);

api.get('/', function(req, res) {
  res.send('Welcome to api server');
});

// API VERSION ROUTES
require('./api/routes')(api);
app.use(app.oauth.errorHandler());

app.listen(3000);
console.log("Listening on port 3000");