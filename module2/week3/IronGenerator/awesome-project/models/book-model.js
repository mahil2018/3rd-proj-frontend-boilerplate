const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

//Use Schema to set our blueprint for each instance in this collection
const bookSchema = new Schema({
  title: String,
  description : String,
  // we want to reference authors inside the book model and for that we will use the 
  author : { type: Schema.Types.ObjectId, ref: "Author" },
  rating : Number,
  image_url: String 
}, 
{
  //Keep record on when document is created or updated
  timestamps: true
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;