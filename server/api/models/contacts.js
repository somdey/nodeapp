'use strict';
const CONTACTS_COLLECTION = 'contacts'; 
module.exports = {
    fetchAllContacts : function (db) {
        return db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
            if (err) throw err;
            return docs;
        });
    }
}
