const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
    },
    description : {
        type: String,
    },
    creationDate: {
        type: Date,
    },
    updationDate: {
        type: Date,
    },
    isActive: {
        type: Boolean,
    }
})

module.exports = mongoose.model('Category', CategorySchema)