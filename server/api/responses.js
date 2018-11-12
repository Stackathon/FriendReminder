const router = require('express').Router()
const {Friend, FriendResponse} = require('../db/')

router.get('/', async (req, res, next) => {
	try {
        const responses = await FriendResponse.findAll({
			include: [Friend]
		})
        console.log("responses", responses)
		res.status(200).json(responses)
	}
	catch (err) {
		next(err)
	}
})

module.exports = router
