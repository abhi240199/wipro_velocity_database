const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function authentication(req, res, next) {
  try {
    let reqtoken = req.headers["authorization"];
    const token = reqtoken.replace("Bearer ", "");
    const result = jwt.verify(token, "abhisecret");
    req.token = result;
    console.log("Middleware called", result);
    next();
  } catch (err) {
    res.send("Error");
  }
}

module.exports = authentication;
