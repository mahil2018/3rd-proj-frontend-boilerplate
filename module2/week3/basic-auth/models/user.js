const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  username: String,
  password: String
}, {
  timestamps: true     //is created and updated
});

const User = mongoose.model("User", userSchema);

module.exports = User;