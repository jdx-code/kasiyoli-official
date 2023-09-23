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
})

module.exports = mongoose.model('Post', PostSchema)