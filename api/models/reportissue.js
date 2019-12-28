const mongoose = require('mongoose')

const reportissueSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    reportId: { //////reportId shoulld be ObjectId
        type: Number,
        required: true
    },
    reportDate: {
        type: String
    },
    madeBy: {
        type: String,
        required: true
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('ReportIsuue', reportissueSchema)