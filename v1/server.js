var express = require("express");
var mongodb = require("mongodb");
var mongoose = require("mongoose");
var app = express();

var middleware = require('./middleware');
app.use(middleware.bodyParser.json());

app.get('/', function(req, res) {
  res.send('Welcome to api server');
});

// API ROUTES BELOW

require('./api/routes/contacts')(app);

app.listen(3000);
console.log("Listening on port 3000");