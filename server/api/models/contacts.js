'use strict';

module.exports = {
    fetchAllContacts : function (req, res) {
        res.send('Model Called');
        // db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
        //     if (err) {
        //       handleError(res, err.message, "Failed to get contacts.");
        //     } else {
        //       res.status(200).json(docs);
        //     }
        // });
    }
}