const mongoose = require('mongoose')

const selectandaddSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
    },
    completion: {
        type: Number
    },
    status: {
        type: String
    }
})

module.exports = mongoose.model('selectandadd', selectandaddSchema)