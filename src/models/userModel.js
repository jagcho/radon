const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     // isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array



const bookSchema = new mongoose.Schema({
  BookName:  String, // String is shorthand for {type: String}
  authorName: String,
  category:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
},{ timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //books