const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    author: {
        type: ObjectId,
        ref: "NewAuthor"
    },
    price: Number,
    ratings: Number,
    publiser: {
        type: ObjectId,
        ref: "NewPubliser"
    },
    isHardCover:{type:Boolean, default: false }
    

}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema)
