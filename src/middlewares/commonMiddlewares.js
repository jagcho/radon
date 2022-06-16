const jwt = require("jsonwebtoken");


const mid1= function ( req, res, next) {
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
      //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });
  //console.log(token);
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
}
try {

  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

next()
}
catch (err) {
  console.log("This is the error :", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}
};

module.exports.mid1= mid1