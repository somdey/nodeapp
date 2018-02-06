"use strict";
const baseUrl = require(appRoot + "/server/config/config").getBaseUrl();
const Post = require(appRoot + "/server/api/models/postModel");
const User = require(appRoot + "/server/api/models/userModel");
const paginate = require("express-paginate");
let postsController = {
  list: (req, res, next) => {
    var limit = req.query.limit;
    var page = req.query.page;
    var offset = (page - 1) * limit;
    Post.findAndCountAll({
      // include: [
      //   {
      //     model: User,
      //     through: {
      //       attributes: ["firstName", "lastName", "email"]
      //     }
      //   }
      // ],
      attributes: ["id", "title", "description", "userId"],
      offset: offset,
      limit: limit
    }).then(post => {
      const pageCount = Math.ceil(post.count / limit);
      if (page < pageCount) {
        var next = {
          title: "Next",
          href: baseUrl + req.baseUrl + "?page=" + (page + 1)
        };
      }
      if (page > 1) {
        var previous = {
          title: "Previous",
          href: baseUrl + req.baseUrl + "?page=" + (page - 1)
        };
      }
      res.json({
        data: post.rows,
        count: post.count,
        self: {
          title: "Self",
          href: baseUrl + req.baseUrl
        },
        previous: previous,
        next: next
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
