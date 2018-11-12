const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const db = require('./db/db')
const {Friend, FriendResponse} = require('./db')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(pino);

app.use('/api', require('./api'))

app.post('/sms', async (req, res, next) => {
  try{
    const twiml = new MessagingResponse();

    if (req.body.Body === 'Y') {
      const msg = twiml.message('Great! See you then!');
      msg.media('https://funnymemess.com/wp-content/uploads/2018/03/97-min-6-267x300.jpg');
    } else if (req.body.Body === 'N') {
      const msg = twiml.message('Whatever...I never liked you anyway');
      msg.media('https://i.pinimg.com/originals/5f/b7/f7/5fb7f71f66416c9a25a581f6b15deed0.jpg');
    } else {
      const msg = twiml.message('Please respond with either Y or N.');
      msg.media('https://media.makeameme.org/created/if-you-could-fbu21e.jpg');
    }
    
    //console.log("reqbody", req.body)
    // FriendResponse.create({
    //   //phoneNumber: req.body.From,
    //   content: req.body.Body
    // })
    //res.json(content)

    let phone = (req.body.From).slice(1)
    let friend = await Friend.findOne({
      where: {
        phoneNumber: phone
      }
    })
    let response = await FriendResponse.create({
      content: req.body.Body
    })
    response.setFriend(friend)
    
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());

  } catch (err) {
		next(err)
	}
});

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

const PORT = 3001;
db.sync()
  .then(() => {
  http.createServer(app).listen(PORT, () => 
    console.log('Express server is running on localhost:3001')
  );
})


module.exports = app
