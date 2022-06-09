const PublisherModel= require("../models/publisherModel")

const NewPublisher= async function (req, res) {
    let data = req.body
    let datasaved = await PublisherModel.create(data)
    res.send({data:datasaved })
}//2nd api

// const books=async function (req, res) {
//     let data=req.body
//     let books= await PublisherModel.findByIdAndUpdate( "62a1beb64104c136a296a617",
//          { $set :data},    
//          { new:true}               
//     )  
//         res.send({msg:books})
// }
const books=async function (req, res) {
    let data=req.body
    let books= await PublisherModel.findByIdAndUpdate( "62a1e4cd70976d6ee37a10fb",
         { $set :data},    
         { new:true}               
    )  
        res.send({msg:books})
}
module.exports.NewPublisher=NewPublisher
module.exports.books=books
