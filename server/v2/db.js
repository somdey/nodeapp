var mongoose = require('mongoose');

//const dbUri = 'mongodb://demo-user:demo-user@ds143734.mlab.com:43734/nodeapi';
const dbUri = 'mongodb://localhost/nodeapi';

mongoose.connect(dbUri, { useMongoClient: true, promiseLibrary: require('bluebird') });

module.exports = {
  mongoose
}