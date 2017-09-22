var express = require("express");
var mongodb = require("mongodb");
var mongoose = require("mongoose");
var app = express();

var MongoClient = require('mongodb').MongoClient;
var db;

// Initialize connection once uisng MongoClient.
// MongoClient.connect("mongodb://demo-user:demo-user@ds143734.mlab.com:43734/nodeapi", function(err, database) {
//   if(err) throw err;

//   app.db = database;
//   // Start the application after the database connection is ready
//   app.listen(3000);
//   console.log("Listening on port 3000");
// });

// Initialize connection using mongoose.
mongoose.connect("mongodb://localhost/nodeapi", { useMongoClient: true }, function(err) {
  if (err) console.log("Could not establish a connection to MongoDB"+ err);
  // Start the application after the database connection is ready
  app.listen(3000);
  console.log("Listening on port 3000");
});

var middleware = require('./middleware');
app.use(middleware.bodyParser.json());

app.get('/', function(req, res) {
  res.send('Welcome to api server');
});

// API ROUTES BELOW

require('./api/routes/contacts')(app);
