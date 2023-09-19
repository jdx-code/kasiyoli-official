const mongoose = require('mongoose')

const GallerySchema = new mongoose.Schema({
    file: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    volume : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Volume',
    },
    cloudinary_id: {
        type: String,
    },
})

module.exports = mongoose.model('Gallery', GallerySchema)