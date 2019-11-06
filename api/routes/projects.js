const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const ProjectDetail = require('../models/project')

router.post('/', (req, res, next) => {
    const projectdetail = new ProjectDetail({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        year: req.body.year,
        businessStory: req.body.businessStory,
        valuesProvided: req.body.valuesProvided,
        links: req.body.links
    })

    projectdetail.save().then(result => {
        console.log(result)
        res.status(201).json({
            message: 'Project Created',
            details: {
                _id: result._id,
                name: result.name,
                type: result.type,
                description: result.description,
                year: req.body.year,
                businessStory: result.businessStory,
                valuesProvided: result.valuesProvided,
                links: result.links
            }
        })
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
})

module.exports = router