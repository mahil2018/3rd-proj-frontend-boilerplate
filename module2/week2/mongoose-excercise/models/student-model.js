// declare schema
const mongoose = require('mongoose');
// weuse Schema class given by mongoose
const Schema = mongoose.Schema;

//define based on Schema we create a blupprint for our students collection
const studentSchema = new Schema({
    name: {type: String,
            required: true},
    image: {type: String, default: 'images/avatar.png'},
    course: {type: String},
    staredMonth: {type: String},
    startedYear: {type: Number},
    Projects: [String],
    PreviousExperience: Boolean,
    created: {
        type: Date,
        default: Date.now
    }
})
//connect the schema with the model we are exporting
const Student = mongoose.model('Student', studentSchema);
// we expor the model to make it accessible in other file
module.exports = Student  // this is the method call model;
