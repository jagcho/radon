const authorModel=require("../models/authorModel")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const authorBook= async function (req, res) {
    let data= req.body

    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}
const getBooksbyChetanBhagat= async function (req, res) {
    let data=await authorModel.find({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
    console.log(data)
    let booklist= await BookModel.find({author_id:data.author_id})
    res.send({msg: booklist})
}
const authorOfBook= async function (req, res) {
    let data= await BookModel.findOneAndUpdate({name:"Two states"},{$set:{prices:100}},{new:true})
    let authordata=await authorModel.find({author_id:data[0].author_id}).select({author_name :1, _id:0})
    let price=data.prices
    res.send({msg: authordata,price})
}
// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }

const booksBetween50_100= async function (req, res) {
    
 let books= await BookModel.find( { price : { $gte: 50, $lte: 100} }).select({author_id :1, _id:0})
 let authorname= await authorModel.find({author_id:books.map(x=>x.author_id)}).select({author_name :1,_id:0})
console.log(authorname)
res.send({msg:authorname})
}

const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}





// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks
module.exports.authorBook=authorBook
module.exports.getBooksbyChetanBhagat=getBooksbyChetanBhagat
module.exports.authorOfBook=authorOfBook
module.exports.booksBetween50_100=booksBetween50_100