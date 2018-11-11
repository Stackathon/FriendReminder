const db = require('./db')
const Sequelize = require('sequelize')

const Friend = db.define('friend', {
    name: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    }
});

const FriendResponses = db.define('friend', {
  content: {
    type: Sequelize.TEXT
  },
});

Friend.hasMany(FriendResponses)
FriendResponses.belongsTo(Friend)


module.exports = {
  db,
  Friend,
  FriendResponses
}