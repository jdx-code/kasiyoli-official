const mongoose = require('mongoose')

const PhotoSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
    studentName: {
        type: String,
        required: true,
    },
    volume : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Volume',
    },
    photoType: {
        type: String,
    },
    cloudinary_id: {
        type: String,
    },
})

module.exports = mongoose.model('Photo', PhotoSchema)