const mongoose = require('mongoose')

const VolumeSchema = new mongoose.Schema({
    volumeYear: {
        type: String,
        required: true,
    },
    volumeNum: {
        type: String,
        required: true,
    },
    volumeEditor: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    cloudinary_id: {
        type: String,
    },
})

module.exports = mongoose.model('Volume', VolumeSchema)