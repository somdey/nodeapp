var bodyParser = require("body-parser");
var flash = require('connect-flash');
var session = require('express-session');
var expressValidator = require('express-validator');

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(session({
    secret: 'sdey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));
  app.use(flash());
  app.use(expressValidator());
}
