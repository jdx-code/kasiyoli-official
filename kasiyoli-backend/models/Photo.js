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
    cloudinary_id: {
        type: String,
    },
})

module.exports = mongoose.model('Photo', PhotoSchema)