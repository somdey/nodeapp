var MongoClient = require('mongodb').MongoClient;
var db;

const dbUri = '';

// Initialize connection once
var getDb = function (callback) {
    if (db) {
        return callback(null, db);
    }
    MongoClient.connect(dbUri, function(err, database) {
        if(err) callback(err);
        db = database;
        callback(null, db); 
    });
}

module.exports = {
    getDb
}