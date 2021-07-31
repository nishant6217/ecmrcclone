const User = require("../model/userSchema");

module.exports.userSignup = async function (req, res) {
  try {
    const exist = await User.findOne({ username: req.body.username });
    if (exist) {
      return res.status(401).json({
        message: " user is already registered",
      });
    }
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    res.status(200).json({
      message: "user is registerd successfully",
    });
  } catch (error) {
    console.log("error message", error.message);
  }
};
module.exports.userLogin = async function (req, res) {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      return res
        .status(200)
        .json(`${req.body.username} login successful`);
    } else {
      return res.status(401).json("invalid login");
    }
  } catch (error) {
    console.log(error.message);
  }
};
