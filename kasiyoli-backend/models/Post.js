const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    postTitle: {
        type: String,
        required: true,
    },
    imageUrl: { // Include a field for storing the image URL
        type: String,
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
        type: {},
        required: true,
        min: 5,
        max: 2000000
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