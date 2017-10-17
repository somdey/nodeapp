
var Sequelize = require('sequelize');
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true,
            },
            firstName: {type:Sequelize.STRING},
            lastName: {type:Sequelize.STRING},
            email: {
              type:Sequelize.STRING,
              unique: true
            },
            password: {type:Sequelize.STRING},
            // Timestamps
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
          })
    },
  
    down: (queryInterface, Sequelize) => {
       return queryInterface.dropTable('users');
    }
  }