const mongoose = require("mongoose");

// const Schema = mongoose.Schema; instead of creating var and 

const phoneSchema = new mongoose.Schema({
    // document structure & rules defined here
    brand: {type: String, required: true },
    model: {type: String, required: true },
    price: {type: Number, required: true },
    image: {type: String, required: true },
    specs: [
      {type: String, minlength:3}
    ]
    },{
      timestamps: true
    });

//const Phone = mongoose.model("phone", phoeSchema);
//module.exports = Phone;

module.exports = mongoose.model('Phone', phoneSchema);
