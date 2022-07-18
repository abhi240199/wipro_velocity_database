const User = require("../models/User");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
module.exports.createUser = async function (req, res) {
  const checkuser = await User.findOne({ email: req.body.email });

  if (checkuser) {
    return res.send({ msg: "User Already exists", status: false });
  }
  const hashedpassword = await bcrypt.hash(req.body.password, 1);
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedpassword,
  });

  return res.send({ msg: "Sign Up successfully", status: true });
};
// module.exports.createSession = async function (req, res) {
//   const user = await User.findOne({ email: req.body.email });
//   if (!user) {
//     return res.send("User not exists!Please sign up");
//   }
//   const checkPass = await bcrypt.compare(req.body.password, user.password);

//   if (checkPass) {
//     var jsontoken = jsonwebtoken.sign({ email: user.email }, "abhisecret", {
//       expiresIn: "1h",
//     });

//     return res.send({
//       msg: "Sign In successfully",
//       token: jsontoken,
//     });
//   }
//   return res.send("Invalid Username/password");
// };
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

module.exports.createSession = async function (req, res) {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.send({ msg: "User not exists!Please Sign up", status: false });
  }
  const checkPass = await bcrypt.compare(req.body.password, user.password);

  if (checkPass) {
    var jsontoken = jsonwebtoken.sign({ email: user.email }, "abhisecret", {
      expiresIn: "1h",
    });
    res.cookie("jwttoken", jsontoken, {
      maxAge: 36000000,
    });

    return res.send({
      msg: "Sign In Successfully",
      token: jsontoken,
      status: true,
      statusCode: 404,
    });
  }
  return res.send({
    msg: "Invalid Username/Password",
    status: false,
    statusCode: 404,
  });
};
module.exports.userProfile = async function (req, res) {
  const reqParams = req.params.email;
  try {
    const user = await User.findOne({ email: reqParams });
    if (user) {
      res.send({
        msg: "User Found ",
        status: true,
        user: user,
      });
    } else {
      res.send({
        msg: "User Not Found",
        status: false,
      });
    }
  } catch (err) {
    res.send({
      msg: "Error in search user",
      status: false,
    });
  }
};
