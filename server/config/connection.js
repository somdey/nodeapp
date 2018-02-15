"use strict";
require("dotenv").config();
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("./db")[env];
let sequelize;

if (env == "development") {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
} else {
  sequelize = new Sequelize(config.DATABASE_URL);
}

sequelize.authenticate().catch(err => {
  throw new Error("Unable to connect to database");
});

// export connection
module.exports = sequelize;
