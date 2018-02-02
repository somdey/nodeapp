
const User = require(appRoot + '/server/api/models/userModel');

let userControler = {
  noList: (message) => {
    return {'No record found': message};
  },
  list :  (req, res) => {
    User.findAll().then(users => {
      if (users.length == 0) {
        res.json(userControler.noList('User'));
      } else {
        res.json(users);
      }
      
    })
  },
  create : (req, res) => {
    if (req.body.email && req.body.password) {
      User.findOrCreate({where: {email: req.body.email}, defaults: req.body}).spread((user, created) => {
        res.json(user.get({
          plain: true
        }));
      })
    }
  },
  findById : (req, res) => {
    res.json({'data': 'findbyid'});
  },
  update : (req, res) => {
    res.json({'data': 'update'});
  },
  delete : (req, res) => {
    res.json({'data': 'delete'});
  },
  authenticate : (req, res) => {
    res.json({'data': 'authenticate'});
  }
}

module.exports = userControler;