const Post = require(appRoot + '/server/api/models/postModel');

let postsController = {
  list :  (req, res) => {
    Post.findAll().then(post => {
      res.json(post);
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