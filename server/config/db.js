require("dotenv").config();

module.exports = {
  development: {
    database: process.env.DB_NAME,
    username: null,
    password: null,
    dialect: "sqlite",
    storage: "dev-nodeapi.sqlite"
  },
  test: {
    username: "database_test",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    DATABASE_URL: process.env.DATABASE_URL,
    dialect: "postgres"
  }
};
