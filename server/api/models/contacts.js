'use strict';
const CONTACTS_COLLECTION = 'contacts'; 

exports.fetchAllContacts = function (db, callback) {
    db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
        return callback(err, docs);
    });
}
exports.createContacts = function(db, newContact, callback) {
    db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, docs) {  
     return callback(err, docs);
    });
}

