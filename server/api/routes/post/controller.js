"use strict";
const Post = require(appRoot + "/server/api/models/postModel");

let postsController = {
  list: (req, res) => {
    Post.findAndCountAll({attributes: ['title', 'id', 'description'], offset:3, limit:2}).then(post => {
      res.json({
        data: post.rows,
        count: post.count,
        self: {
          title: "Self",
          href: "http://localhost:3000/api/post/"
          },
        next: {
          title: "Next",
          href: "http://localhost:3000/api/post/"
        }
      });
    });
  },
  create: (req, res) => {
    if (req.body && req.file) {
      Post.create({
        userId: req.body.userId,
        title: req.body.title,
        description: req.body.description,
        filename: req.file.filename
      })
        .then(post => {
          res.json({
            data: post,
            links: {
              self: "http://localhost:3000/api/post/" + post.id
            }
          });
        })
        .catch(err => {
          res.status(500).json({
            Error: {
              Request: "Internal server error",
              Message: err
            }
          });
        });
    } else {
      res.status(400).json({
        Error: {
          Request: "Bad request",
          Message: "Please provide input"
        }
      });
    }
  },
  findById: (req, res) => {
    res.json({ data: "findbyid" });
  },
  update: (req, res) => {
    res.json({ data: "update" });
  },
  delete: (req, res) => {
    res.json({ data: "delete" });
  },
  authenticate: (req, res) => {
    res.json({ data: "authenticate" });
  }
};

module.exports = postsController;
