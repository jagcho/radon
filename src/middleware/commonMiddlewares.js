const jwt = require("jsonwebtoken");

const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
        let token = req.headers["x-Auth-token"];
        if (!token) token = req.headers["x-auth-token"];
          //If no token is present in the request header return error
      if (!token) return res.send({ status: false, msg: "token must be present" });
    
      console.log(token);
    
      let decodedToken = jwt.verify(token, "functionup-radon");
      if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });
    next()
}


const authorise = function(req, res, next) {
let token = req.headers["x-Auth-token"] || req.headers["x-auth-token"]; 
let decodedToken = jwt.verify(token, "functionup-radon");
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId

    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
    // comapre the logged in user's id and the id in request
    next()
}


module.exports.mid1= authenticate
module.exports.mid2= authorise
