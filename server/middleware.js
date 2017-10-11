var bodyParser = require("body-parser");
var flash = require('connect-flash');
var session = require('express-session');
var expressValidator = require('express-validator');
var oauthserver = require('oauth2-server');
var models = require('./api/models');

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
    model: models.oauth, // See below for specification 
    grants: ['password'],
    debug: false
  });
   
  app.all('/api/v2/oauth/token', app.oauth.grant());
}
