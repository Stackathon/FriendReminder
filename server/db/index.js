const db = require('./db')
const Sequelize = require('sequelize')

const Friend = db.define('friend', {
    name: {
      type: Sequelize.STRING
    },
    phoneNumber: {
      type: Sequelize.STRING
    },
    group: {
      type: Sequelize.STRING
    },
  });

module.exports = {
  db,
  Friend
}