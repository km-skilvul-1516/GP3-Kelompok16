const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'Please enter a valid email']
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minlength: [6, 'Minimum password length is 6 characters']
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    no_telp: {
      type: String,
      required: true,
    },
    // likedBlog: {
    //   type: Array
    // }
  },
);

// Create new model(nameCollection, nameSchema)
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;