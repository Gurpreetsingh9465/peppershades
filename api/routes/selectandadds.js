const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const selectandadd = require('../models/selectandadd')

router.get('/', (req, res, next) => {
    selectandadd
        .find()
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                facilities: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        completion: doc.completion,
                        status: doc.status
                    }
                })
            }

            res.status(200).json(response)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

module.exports = router