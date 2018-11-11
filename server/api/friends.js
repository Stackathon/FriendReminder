const router = require('express').Router()
const {Friend} = require('../db')

// GET /api/friends
router.get('/', async (req, res, next) => {
    try {
        const friends = await Friend.findAll()
        res.status(200).json(friends)
    }
    catch (err) {
        next(err)
    }
})

// POST /api/friends
router.post('/', async (req, res, next) => {
    try {
        const newFriend = await Friend.create({
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            group: req.body.group
        })
        res.status(201).json(newFriend)
    }
    catch (err) {
        next(err)
    }
})