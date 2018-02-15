const express = require("express");
const loginRouter = express.Router();
const controller = require("./controller");

loginRouter
  .route("/")
  .post(controller.login);

module.exports = loginRouter;
