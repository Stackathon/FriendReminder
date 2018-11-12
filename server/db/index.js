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
    content: {
      type: Sequelize.TEXT
    },
});

const FriendResponse = db.define('friendResponse', {
  content: {
    type: Sequelize.TEXT
  },
});

Friend.hasMany(FriendResponse)
FriendResponse.belongsTo(Friend)

module.exports = {
  db,
  Friend,
  FriendResponse
}