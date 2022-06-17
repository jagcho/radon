let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getByDistricts = async function (req, res) {
    try {
        let d_id = req.query.district_id 
        let date = req.query.date
        console.log(`query params are: ${d_id} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${d_id}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
 let getSortedcities = async function(req,res){
        try{
            let cities=["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"]
            let cityObjArray=[]
            for (i=0;i<cities.length;i++){
                let obj={city : cities[i]}
                let resp= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=15bf74cae43520048295f5202af9f413`)
                
                obj.temp=resp.data.main.temp;
                console.log(obj.temp)
                cityObjArray.push(obj)
                console.log(cityObjArray)
            }



            let sorted=cityObjArray.sort( function(a,b){ return a.temp -b.temp})
            console.log(sorted)
            res.status(200).send({status:true, data:sorted})
        }
    catch(err){
        console.log(err)
        res.status(200).send({status:false,msg:"server error"})
    }
    };
    
    let memes = async function(req,res){
       try{
        let options={
            method:"post",
            url:`https://api.imgflip.com/caption_image?template_id=181913649&text0=jagdish&text1=jagdish_is_cool&username=chewie12345&password=meme@123`
        }
       
       let result= await axios(options)
       res.send({ data: result.data})

    } catch(err){
        console.log(err)
        res.status(200).send({status:false,msg:"server error"})
    }

    }
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistricts = getByDistricts
module.exports.getSortedcities = getSortedcities
module.exports.memes = memes