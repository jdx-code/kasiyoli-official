const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    postTitle: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',       
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory',
    },
    volume: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Volume',
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