const bookModel= require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

const createbook= async function (req, res) {
    let data= req.body
    let savedbook= await bookModel.create(data)
    res.send({msg: savedbook})
}

const getbooksData= async function (req, res) {
    let allbooks= await bookModel.find()
    res.send({msg: allbooks})
}
// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
module.exports.createbook= createbook
module.exports.getbooksData= getbooksData