const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    postTitle: {
        type: String,
        required: true,
    },
    category: {
        type: String,        
    },
    subCategory: {
        type: String,
    },
    postContent: {
        type: String,
        required: true,
    },
    creationDate: {
        type: Date,
    },
    updationDate: {
        type: Date,
    },
    isActive: {
        type: Boolean,
    },
    postUrl: {
        type: String,
    }
})

module.exports = mongoose.model('Post', PostSchema)