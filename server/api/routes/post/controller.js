"use strict";
const nodeEnvBaseUrl = require(appRoot + "/server/config/config").baseUrl;
const Post = require(appRoot + "/server/api/models/postModel");
const paginate = require("express-paginate");
let postsController = {
  list: (req, res, next) => {
    Post.findAndCountAll({
      attributes: ["id", "title", "description"],
      offset: 0,
      limit: req.query.limit
    }).then(post => {
      const pageCount = Math.ceil(post.count / req.query.limit);
      res.json({
        data: post.rows,
        count: post.count,
        self: {
          title: "Self",
          href: nodeEnvBaseUrl + req.baseUrl
        },
        next: {
          title: "Next",
          href: nodeEnvBaseUrl + req.baseUrl
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
            self: {
              title: "Self",
              href: nodeEnvBaseUrl + req.baseUrl
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
