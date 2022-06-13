
const orderModel = require("../models/orderModel")

const createorder= async function (req, res) {
    let data1=await orderModel.create(req.body)
    let data2= req.body.userId
    let data3=req.body.productId
    let data4=await orderModel.find().populate('userId').populate('productId')
    console.log(data1)
    console.log(data2)
    console.log(data3)
    console.log(data4)
     if(data2===data4[0].userId._id.toString()){
        console.log("userId is Valid")
       // res.send({msg:"userId is Valid"})
     }else{
       // res.send({msg:"userId is invalid"})
       console.log(" userId is Invalid")
     }
     if(data2===data4[0].productId._id.toString()){
        console.log("productId is Valid")
       // res.send({msg:"productId is Valid"})
     }else{
       // res.send({msg:"productId is invalid"})
       console.log("productId is  InValid")
     }
    
    res.send({msg: data4})
}

// const getBooksData = async function (req, res) {
//     let allBooks = await BookModel.find({ authorName: "HO" })
//     console.log(allBooks)
//     if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
//     else res.send({ msg: "No books found", condition: false })
// }


// const updateBooks = async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks = await BookModel.findOneAndUpdate(
//         { authorName: "ABC" }, //condition
//         { $set: data }, //update in data
//         { new: true, upsert: true } ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
//     )

//     res.send({ msg: allBooks })
// }

// const deleteBooks = async function (req, res) {
//     // let data = req.body 
//     let allBooks = await BookModel.updateMany(
//         { authorName: "FI" }, //condition
//         { $set: { isDeleted: true } }, //update in data
//         { new: true } ,
//     )

//     res.send({ msg: allBooks })
// }



// const totalSalesPerAuthor = async function (req, res) {
//     // let data = req.body 
//     let allAuthorSales = await BookModel.aggregate(
//         [
//             { $group: { _id: "$authorName", totalNumberOfSales: { $sum: "$sales" } } },
//             { $sort: { totalNumberOfSales: -1 } }
//         ]
//     )

//     res.send({ msg: allAuthorSales })
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createorder = createorder
// module.exports.getBooksData = getBooksData
// module.exports.updateBooks = updateBooks
// module.exports.deleteBooks = deleteBooks
// module.exports.totalSalesPerAuthor = totalSalesPerAuthor
