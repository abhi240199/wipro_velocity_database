const User = require("../models/User");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
module.exports.createUser = async function (req, res) {
  const checkuser = await User.findOne({ email: req.body.email });

  if (checkuser) {
    return res.send("User Already exists");
  }
  const hashedpassword = await bcrypt.hash(req.body.password, 1);
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedpassword,
  });

  return res.send("Sign Up successfully");
};
module.exports.createSession = async function (req, res) {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.send("User not exists!Please sign up");
  }
  const checkPass = await bcrypt.compare(req.body.password, user.password);

  if (checkPass) {
    var jsontoken = jsonwebtoken.sign({ email: user.email }, "abhisecret", {
      expiresIn: "1h",
    });

    return res.send({
      msg: "Sign In successfully",
      token: jsontoken,
    });
  }
  return res.send("Invalid Username/password");
};
module.exports.updatePassword = async function (req, res) {
  try {
    const user = await User.findOne({ email: req.token.email });
    if (!user) {
      return res.send("User not exists!Please Sign in");
    }
    const hashPass = await bcrypt.hash(req.body.password, 1);
    const update = await User.findOneAndUpdate(
      { email: req.token.email },
      {
        password: hashPass,
      }
    );
    if (update) {
      res.send("Password updated succesfully");
    } else {
      res.send("Error in updating Password");
    }
  } catch {
    res.send("Error");
  }
};
module.exports.signIn = function (req, res) {
  return res.render("signin");
};
module.exports.signUp = function (req, res) {
  return res.render("signup");
};
module.exports.deleteUser = async function (req, res) {
  try {
    const user = await User.findOneAndDelete({ email: req.token.email });
    if (user) {
      res.send("deleted user successfully");
    } else {
      res.send("Invalid user");
    }
  } catch {
    res.send("error in deleting user");
  }
};
