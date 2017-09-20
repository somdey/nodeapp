var express = require("express");
var mongodb = require("mongodb");
var app = express();

var MongoClient = require('mongodb').MongoClient;
var db;

// Initialize connection once
MongoClient.connect("mongodb://demo-user:demo-user@ds143734.mlab.com:43734/nodeapi", function(err, database) {
  if(err) throw err;

  app.db = database;
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
  
  //   db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, doc) {
  //     if (err) {
  //       handleError(res, err.message, "Failed to create new contact.");
  //     } else {
  //       res.status(201).json(doc.ops[0]);
  //     }
  //   });
  // });
  
  // /*  "/api/contacts/:id"
  //  *    GET: find contact by id
  //  *    PUT: update contact by id
  //  *    DELETE: deletes contact by id
  //  */
  // app.get("/api/contacts/:id", function(req, res) {
  //   db.collection(CONTACTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
  //     if (err) {
  //       handleError(res, err.message, "Failed to get contact");
  //     } else {
  //       res.status(200).json(doc);
  //     }
  //   });
  // });
  
  // app.put("/api/contacts/:id", function(req, res) {
  //   var updateDoc = req.body;
  //   delete updateDoc._id;
  
  //   db.collection(CONTACTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
  //     if (err) {
  //       handleError(res, err.message, "Failed to update contact");
  //     } else {
  //       updateDoc._id = req.params.id;
  //       res.status(200).json(updateDoc);
  //     }
  //   });
  // });
  
  // app.delete("/api/contacts/:id", function(req, res) {
  //   db.collection(CONTACTS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
  //     if (err) {
  //       handleError(res, err.message, "Failed to delete contact");
  //     } else {
  //       res.status(200).json(req.params.id);
  //     }
  //   });
  // });