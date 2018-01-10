'use strict';
require('dotenv').config();
const Sequelize = require('sequelize');
const env       = process.env.NODE_ENV || 'development';
const config    = require('./db')[env];
let sequelize;

if (env == 'development') {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}else {
  sequelize = new Sequelize(config.DATABASE_URL);
}

sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

// export connection
module.exports = sequelize;