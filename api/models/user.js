const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    company: {
        type: String
    },
    jobTitle: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchema)