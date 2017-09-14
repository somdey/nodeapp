var mongodb = require("mongodb");

var _db;
module.exports = {
  connectToServer: function( callback ) {
    mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/admin', function (err, db) {
      _db = db;
      return callback( err );
    });
  },
  getDb: function() {
    return _db;
  },
  mongodb: function() {
    return mongodb;
  }
};