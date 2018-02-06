const Sequelize = require("sequelize");
const db = require(appRoot + "/server/config/connection");
const Post = require("./postModel");
const User = db.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: { type: Sequelize.STRING },
    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  },
  {
    getterMethods: {
      fullName() {
        return this.firstName + " " + this.lastName;
      }
    }
  }
);

Post.belongsTo(User);
module.exports = User;
