const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Project = require('../models/project')

router.get('/all', (req, res, next) => {
    const offset = req.query.offset
    const limit = req.query.limit
    const id = req.query.id
    const name = req.query.services
    const currentStatus = req.query.currentStatus

    res.status(200).json({
        message: 'Displaying all projects'
    })
})

router.get('/:projectId', (req, res, next) => {
    const projectId = req.params.projectId
    Project.findById(projectId)
        .exec()
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            console.log("skjdhkjs")
            res.status(500).json({
                error: err
            })
        })
})

router.post('/create', (req, res, next) => {
    const project = new Project({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name, //
        industry: req.body.industry, //
        description: req.body.description, //
        values: req.body.values,
        target: req.body.target, //
        gender: req.body.gender,
        age1: req.body.age1,
        age2: req.body.age2,
        audience: req.body.audience,
        competitor: [{ name: req.body.competitor[0].name },
            { website: req.body.competitor[1].website }
        ],
        otherinfo: req.body.otherinfo,
        serviceCategory: req.body.serviceCategory, //////
        services: [{ serviceName: req.body.services[0].serviceName }, //////
            { currentStatus: req.body.services[1].currentStatus },
            { finalDesign: req.body.services[2].finalDesign },
            { designImages: req.body.services[3].designImages },
            { timeElapsed: req.body.services[4].timeElapsed },
            { basePay: req.body.services[5].basePay }
        ],
        serviceMode: req.body.serviceMode, ///////
        links: req.body.links,
        paymode: req.body.paymode,
        discounts: req.body.discounts,
        deadline: req.body.deadline,
        currency: req.body.currency,
        paymentAmount: req.body.paymentAmount,
        currentStatus: req.body.currentStatus,
        clientId: req.body.clientId,
        freelancerId: req.body.freelancerId,
        budget: req.body.budget, ////
        language: req.body.language, //////
        dateCreated: req.body.dateCreated,
        chatRoom: req.body.chatRoom,
        rating: req.body.rating,
        review: req.body.review
    })
    project.save().then(result => {
        console.log(result)
        res.status(200).json({
            message: 'Project created successfully'
        })
    }).catch(error => console.log("error in this"))
})

router.patch('/:projectId', (req, res, next) => {
    const updatedId = req.params.projectId
    res.status(200).json({
        message: 'Project Completed',
        id: updatedId
    })
})

module.exports = router