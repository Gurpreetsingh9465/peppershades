const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Project = require('../models/project')
const User = require('../models/user')

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
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

router.post('/create', (req, res, next) => {
    const project = new Project({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        industry: req.body.industry,
        description: req.body.description,
        values: req.body.values,
        target: req.body.target,
        gender: req.body.gender,
        age1: req.body.age1,
        age2: req.body.age2,
        audience: req.body.audience,
        otherinfo: req.body.otherinfo,
        links: req.body.links,
        paymode: req.body.paymode,
        discounts: req.body.discounts,
        deadline: req.body.deadline,
        currency: 'pending',
        serviceCategory: req.body.serviceCategory,
        serviceMode: req.body.serviceMode,
        paymentAmount: req.body.paymentAmount,
        budget: req.body.budget,
        language: req.body.language,
        clientId: req.body.clientId
    })
    project.save().then(result => {
        console.log(result)
        res.status(200).json({
            message: 'Project created successfully'
        })
    }).catch(error => console.log(error))
})

router.patch('/:projectId', (req, res, next) => {
    const updatedId = req.params.projectId
    res.status(200).json({
        message: 'Project Completed',
        id: updatedId
    })
})

module.exports = router