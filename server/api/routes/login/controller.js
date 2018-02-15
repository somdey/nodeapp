const User = require(appRoot + "/server/api/models/userModel");
const jwt = require("jsonwebtoken");
const passport = require("passport");

let userControler = {
  login: (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err) {
        return res.status(400).json({
          message: 'Something is not right',
          user: user
        });
      }
      req.login(user, { session: false }, (err) => {
        if (err) {
          res.send(err);
        }
        // generate a signed son web token with the contents of user object and return it in the response
        const token = jwt.sign(user.dataValues, 'abc123', {
          expiresIn: 86400 // expires in 24 hours
        });
        return res.json({ user: user.dataValues, token });
      });
    })(req, res);
  }
};

module.exports = userControler;
