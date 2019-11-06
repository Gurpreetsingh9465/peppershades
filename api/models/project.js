const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    year: {
        type: Number,
    },
    businessStory: {
        type: String
    },
    valuesProvided: {
        type: String
    },
    links: {
        type: String
    }
})

module.exports = mongoose.model('ProjectDetail', projectSchema)