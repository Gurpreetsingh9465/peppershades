const mongoose = require('mongoose')

const chatSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    members: [{
            m_client: {
                type: ObjectId,
                required: true
            }
        },
        {
            m_freelancer: {
                type: ObjectId,
                required: true
            }
        }
    ],
    messages: [
        { date: String },
        { time: String },
        { member: String },
        { message: String },
        { status: String },
        {
            pin: {
                type: String,
                default: false
            }
        },
        { pinX: Number },
        { pinY: Number },
        { file: String },
        { uploadProgress: Number }
    ]
})

module.exports = mongoose.model('Chat', chatSchema)