var MongoClient = require('mongodb').MongoClient;
var db;

//const dbUri = 'mongodb://demo-user:demo-user@ds143734.mlab.com:43734/nodeapi';
const dbUri = 'mongodb://localhost/nodeapi';

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