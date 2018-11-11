const db = require('./db')
const Sequelize = require('sequelize')

const Friend = db.define('friend', {
    name: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.TEXT
    },
  });

module.exports = {
  db,
  Friend
}