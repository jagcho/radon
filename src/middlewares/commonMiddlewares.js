const jwt = require("jsonwebtoken");


const mid1= function ( req, res, next) {
   try{
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    console.log(token);
      //If no token is present in the request header return error    
    if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
  
  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken) return res.status(400).send({ status: false, msg: "token is invalid" });
  next()
}
catch (err) {
  console.log("This is the error :", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}
};
const mid2= function ( req, res, next) {
  try{

let token = req.headers["x-Auth-token"] || req.headers["x-auth-token"]; 
let decodedToken = jwt.verify(token, "functionup-radon");
let userToBeModified = req.params.userId
let userLoggedIn = decodedToken.userId
console.log(userLoggedIn)

if(userToBeModified != userLoggedIn) return res.status(403).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

}
catch (err) {
  console.log("This is the error :", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}
next()
};

module.exports.mid1= mid1
 module.exports.mid2= mid2