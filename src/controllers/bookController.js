const match = require("nodemon/lib/monitor/match")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}//book created

// const createBook= async function (req, res) {
//     let a= req.body.author
//     let result = await bookModel.find({author:a})
//     if(result===[]){
//        // console.log("author is required")
//     }
//         res.send({msg:"author is required"})
// }//a
// const createBook= async function (req, res) {
//     let authorid = req.body.author
//     console.log(authorid)
//     let result = await bookModel.find({author:authorid}).select({author:1,_id:0})
//       let a =  result[0].author
//       let b =a.toString()
//       console.log(b)
//     if(authorid=== b){
//         console.log("valid author_id present")
//   }
//         res.send({msg:" valid author_id present"})
// }//b
// const createBook= async function (req, res) {
//     let a = req.body.publiser
//     let result = await bookModel.find({publiser:a})
//     if(result===[]){
//        // console.log("publiser is required")
//     }
//         res.send({msg:"publiser is required"})
// }//c
// const createBook= async function (req, res) {
//     let publiserid = req.body.publiser
//     console.log(publiserid)
//     let result = await bookModel.find({publiser:publiserid}).select({publiser:1,_id:0})
//     let a =result[0].publiser
//     let b=a.toString()
//     console.log(b)
//     if(publiserid===b){
// console.log("valid publiser_id present")
//}
//     res.send({msg:" valid publiser_id present"})
// }//d


// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author').populate('publiser')
//     res.send({data: specificBook})

// }//4th api

const books=async function (req, res) {
    let data=req.body
    let books= await bookModel.find().populate(['author','publiser'])
     finalBooks=[]
     for(let i=0;i<books.length;i++){
        if(book[i].publisherId.name)
     }   



}
module.exports.createBook= createBook
module.exports.books=books
// module.exports.getBooksData= getBooksData
//module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
