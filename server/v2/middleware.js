var bodyParser = require("body-parser");
var flash = require('connect-flash');
var session = require('express-session');
var expressValidator = require('express-validator');
var oauthserver = require('oauth2-server');

module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(session({
    secret: 'sdey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));
  app.use(flash());
  app.use(expressValidator());
  // Create oauth server here.
  app.oauth = oauthserver({
    model: {},
    grants: ['password'],
    debug: true
  });
  app.all('/oauth/token', app.oauth.grant());
  app.use(app.oauth.errorHandler());
}
