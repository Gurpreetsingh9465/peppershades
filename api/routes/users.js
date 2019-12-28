const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const User = require('../models/user')

router.post('/createUser', (req, res, next) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name, ///
        email: req.body.email, ////
        verified: req.body.verified,
        password: req.body.password, ////
        contact: req.body.contact, ////
        company: req.body.company,
        jobTitle: req.body.jobTitle
    })

    user
        .save()
        .then(result => {
            console.log(result)
            res.status(200).json({
                message: 'User created successfully'
            })
        })
        .catch(err => console.log(err))
})

module.exports = router