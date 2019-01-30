const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
   // unless you'll have more than one property defined you need to use this: {type: String}
    //firstName : {type: String}
    firstName : String,
    lastName: String,
    nationality: String,
    birthday: Date,
    image_url: {type: String, default: "https://i.ytimg.com/vi/WkPoEa_I21o/hqdefault_live.jpg"},
},{
    // keep record on when created and updated
    timestamps: true
})
const Autor = mongoose.model("Author", authorSchema);

// export Author to make it available in other files
module.exports = Author;