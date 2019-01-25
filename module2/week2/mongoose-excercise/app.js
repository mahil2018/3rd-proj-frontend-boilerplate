const express = require('express');
const mongoose = require('mongoose');
const hbs = require('hbs');

// import model to make it available in this file

const Student = require('./models/student-model');  //Student is a mongoose model

// connect with database
//     here you name your DB studenBook 
//     The collection is called Student
mongoose.connect("mongodb://localhost/studentBook")

//we create our application here:
const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public')); // new sintax without path

//1. Create NEW data base INSTANCES
// Student.create({
//     name: "Ana",
//     course: "UX",
//     staredMonth: "January",
//     startedYear: 2018,
//     Projects: ['X', 'Y', 'Z'],
//     PreviousExperience: false,
// })
// .then( newStudent => {
//     console.log("New student successfully created in DB: ", newStudent);
// })
// .catch(err => {
//     console.log("Error while creating new instances", err);
// })

//ALTERNATIE WAY TO CREATE INSTANCE IN THE DATABASE
// const camiloInfo = new Student({
//     name: "Camilo",
//     course: "Web Dev",
//     startedMonth: "December",
//     staratedYear: 2018,
//     projects: ['game'],
//     previousExperiece: true
// })

// camiloInfo.save()
// .then( newStudentInfo =>{
//     console.log("New student created", newStudentInfo)
// })
// .catch(err => {
//     console.log("Error while creating new instance", err);   
// })

// RETRIEVE/READ

// Student.find() //<======== .find() will ALWAYS give you an ARRAY back
// .then( allStudentsFromDB =>{
//     allStudentsFromDB.forEach(Student => {
//         console.log(Student.name);
//     })
// })
// .catch(err => {
//     console.log("Error while is looking for", err);   
// })

// //.findById() //will always give you an OBJECT back
// Student.findById("5c4a43a76f2777b0a9122c2b")
// .then(theStudent => {
//     console.log("Student is ", theStudent.name)
// })
// .catch(err => {
//     console.log("Error while creating new instance", err);   
// })


// Student.findOne({ course:"UX"})
// .then(theStudent => {
//     console.log("Student is: ", theStudent.name)
// })
// .catch(err => {
//     console.log("Error while creating new instance", err);   
// })

//update
// Student.findByIdAndUpdate("5c4a43a76f2777b0a9122c2b",{ name:"Paula S."})
// .then( updateStudent =>{
//     console.log("updated student is:", updateStudent)
// })
// .catch(err => {
//         console.log("Error while creating new instance", err);   
//     })


//Delete

// Student.findByIdAndRemove("5c4a43a76f2777b0a9122c2b")
// .then( student =>{
//     console.log(`student with Id ${student._id} is removed from the DB.`)
// })
// .catch(err => {
//         console.log("Error while creating new instance", err);   
//     })

    Student.findByIdAndDelete("5c4a4b6a372dbdb4d42dd5a3")
    .then( student =>{
        console.log(`student with Id ${student._id} is deleted from the DB.`)
    })
    .catch(err => {
            console.log("Error while creating new instance", err);   
        })



app.listen(3000, () =>{
    console.log("Listening on 30000 !")
})