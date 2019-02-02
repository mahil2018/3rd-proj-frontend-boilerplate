const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

//Use Schema to set our blueprint for each instance in this collection
const authorSchema = new Schema({
  firstName: String,
  lastName : String,
  nationality : String,
  birthdate : Date,
  description : String,
  image_url: String
  //Keep record on when document is created or updated
//   timestamps: true
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;