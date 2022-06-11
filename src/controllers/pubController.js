const PublisherModel= require("../models/publisherModel")

const NewPublisher= async function (req, res) {
    let data = req.body
    let datasaved = await PublisherModel.create(data)
    res.send({data:datasaved })
}//2nd api



module.exports.NewPublisher=NewPublisher

