const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const UserModel = require("../api/models/userModel");

// Authentication.
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  function (email, password, cb) {
    //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
    return UserModel.findOne({
      where: { email: email, password: password },
      attributes: ['id', 'email']
    }).then(user => {
      if (!user) {
        return cb(null, false, { message: 'Incorrect email or password.' });
      }
      return cb(null, user, { message: 'Logged In Successfully' });
    })
      .catch(err => cb(err));
  }
));


// Authrization.
passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'abc123'
},
  function (jwtPayload, cb) {

    //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
    return UserModel.findOne({ where: { id: jwtPayload.id } })
      .then(user => {
        return cb(null, user);
      })
      .catch(err => {
        return cb(err);
      });
  }
));

module.exports = passport;