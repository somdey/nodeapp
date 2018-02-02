const Sequelize = require("sequelize");
const db = require(appRoot + "/server/config/connection");
const User = require("./userModel");
const Post = db.define(
  "posts",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: { type: Sequelize.INTEGER },
    title: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING },
    filename: { type: Sequelize.STRING },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  },
  {
    getterMethods: {
      self() {
        return "http://localhost:3000/api/post/" + this.id;
      }
    }
  }
);

User.hasMany(Post, { as: "Posts" });
module.exports = Post;
