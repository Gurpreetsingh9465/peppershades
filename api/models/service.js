const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
    serviceId: { ///////////////
        type: Number,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    minimumHrs: {
        type: Number,
        required: true
    },
    minimumRate: {
        type: Number,
    },
    category: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Service', serviceSchema)