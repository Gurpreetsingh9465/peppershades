const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    values: {
        type: String
    },
    target: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    age1: {
        type: Number
    },
    age2: {
        type: Number
    },
    audience: {
        type: String
    },
    competitor: [{
            name: {
                type: String
            }
        },
        {
            website: {
                type: String
            }
        }
    ],
    otherinfo: {
        type: String
    },
    serviceCategory: {
        type: String,
        required: true
    },
    services: [ ////required
        { serviceName: String },
        { currentStatus: String },
        { finalDesign: String },
        { designImages: Array },
        { timeElapsed: Number },
        { basePay: Number },
    ],
    serviceMode: {
        type: String,
        required: true
    },
    links: {
        type: String
    },
    paymode: {
        type: String
    },
    discounts: {
        type: Array
    },
    deadline: {
        type: String
    },
    currency: {
        type: String
    },
    paymentAmount: {
        type: Number,
        required: true
    },
    currentStatus: {
        type: String
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    freelancerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Freelancer'
    },
    budget: {
        type: Number,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    dateCreated: {
        type: String
    },
    chatRoom: {
        type: Number
    },
    rating: {
        type: Number
    },
    review: {
        type: String
    },
    required: [
        "name",
        "industry",
        "description",
        "target",
        "serviceCategory",
        "services",
        "serviceMode",
        "paymentAmount",
        "clientId"
    ]
})


module.exports = mongoose.model('Project', projectSchema)