var MongoClient = require('mongodb').MongoClient;
var db;

// Initialize connection once
getDb = function (callback) {
    if (db) {
        return callback(db);
    }
    MongoClient.connect("mongodb://demo-user:demo-user@ds143734.mlab.com:43734/nodeapi", function(err, database) {
        if(err) callback(err);
        db = database;
        callback(null, db); 
    });
}

module.exports = {
    getDb
}