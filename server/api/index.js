const router = require('express').Router()
module.exports = router

router.use('/friends', require('./friends'))
router.use('/messages', require('./messages'))
router.use('/responses', require('./responses'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})