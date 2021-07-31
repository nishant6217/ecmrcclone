const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    username: {
      type: String,
      
      
      
    },
    email: String,
    password: String,
    phonenumber: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
