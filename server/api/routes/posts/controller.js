const db = require(appRoot + '/server/config/connection');
const Posts = require('./model')(db);

let postsController = {
  list :  (req, res) => {
    Posts.findAll().then(posts => {
      res.json(posts);
    })
  },
  create : (req, res) => {
    res.json({'data': 'create new post'});
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

module.exports = postsController;