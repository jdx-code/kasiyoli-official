const mongoose = require('mongoose')

const SubCategorySchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    subCategory: {
        type: String,
        required: true,
    },
    subCategoryDesc: {
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
    }
})

module.exports = mongoose.model('SubCategory', SubCategorySchema)