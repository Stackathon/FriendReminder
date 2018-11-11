const router = require('express').Router()
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// POST /api/messages
router.post('/', (req, res) => {
  res.header('Content-Type', 'application/json');
  const numbers = req.body
  const body = 'Are you free this weekend? Reply Y or N'
  Promise.all(
    numbers.map(number => {
      return client.messages.create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: number,
      body: body
      });
    })
  )
  .then(() => {
    console.log('Messages sent!');
    res.send(JSON.stringify({ success: true }));
  })
  .catch(err => {
    console.log(err);
    res.send(JSON.stringify({ success: false }));
  });
})

module.exports = router
