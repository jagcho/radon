const mongoose = require('mongoose');

const publiserSchema = new mongoose.Schema( {
    name: String,
    headQuarter:String,
    isHardCover:{type:Boolean,default:false   
    }}, { timestamps: true });

module.exports = mongoose.model('NewPubliser', publiserSchema )
