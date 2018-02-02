const express = require("express");
const postsRouter = express.Router();
const postsController = require("./controller");
const uploadMiddleware = require(appRoot + "/server/middleware").upload;
const paginate = require("express-paginate");

postsRouter
  .route("/")
  .get(paginate.middleware(5, 50), postsController.list)
  .post(uploadMiddleware.single("post_image"), postsController.create);

postsRouter.route("/:id").get(postsController.findById);

module.exports = postsRouter;
