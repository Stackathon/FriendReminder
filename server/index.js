const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const db = require('./db/db')
const {FriendResponse} = require('./db')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(pino);

app.use('/api', require('./api'))

// app.get('/api/greeting', (req, res) => {
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

app.post('/sms', (req, res, next) => {
  const twiml = new MessagingResponse();

  //twiml.message('The Robots are coming! Head for the hills!');
  if (req.body.Body === 'Y') {
    const msg = twiml.message('Great! See you then!');
    // msg.media('https://funnymemess.com/wp-content/uploads/2018/03/97-min-6-267x300.jpg');
  } else if (req.body.Body === 'N') {
    const msg = twiml.message('Whatever...I never liked you anyway');
    // msg.media('https://i.pinimg.com/originals/5f/b7/f7/5fb7f71f66416c9a25a581f6b15deed0.jpg');
  } else {
    const msg = twiml.message('Please respond with either Y or N.');
    // msg.media('https://media.makeameme.org/created/if-you-could-fbu21e.jpg');
  }
  
  FriendResponse.create({
    //phone: req.body.From,
    content: req.body.Body
  })

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
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
