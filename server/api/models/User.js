var Sequelize = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('users', {
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
      }, {
        getterMethods: {
          fullName() {
            return this.firstName + ' ' + this.lastName
          }
        }
    });
}
