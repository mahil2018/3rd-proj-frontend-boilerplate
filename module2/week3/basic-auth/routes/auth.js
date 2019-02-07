const express = require('express');
const router  = express.Router();

const User = require('../models/user')

// BCrypt to encrypt passwords we need to install and require BCRYPTJS (or BCRYPT)
const bcrypt         = require("bcryptjs");
const bcryptSalt     = 10;              //times to run algorithm, how many rounds of hashing

/* GET routes to display the form for user to signuphome page */
router.get('/signup', (req, res, next) => {  // es la ruta
  res.render('auth/signup');                 //es la vista

});
// <form action ="/signup" method "post"
router.post("/signup", (req, res, next) => {
  console.log(req.body);
  const userEmail = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  
  //all users must input BOTH email and password
      if (username === "" || userEmail === ""|| password === "") {
        res.render("auth/signup", {
          errorMessage: "Indicate a username and a password to sign up"
        });
        return;  //in order to avoid having huge else statment, just put return here!
      }
      
      User.findOne({ "email": userEmail })
      .then(user => {
        if (user !== null) {
            res.render("auth/signup", {
              errorMessage: "The username already exists!"
            });
            return;
          }
      
          const salt     = bcrypt.genSaltSync(bcryptSalt); //generate algorithm depends on how many rounds
          //hashPass is our encrypted password..(2 param 1 password, 2 salt const)
          const hashPass = bcrypt.hashSync(password, salt);
      
          User.create({
            // email and password are the keys from User model
            email : userEmail,
            username : username,
            password : hashPass
            //userEmail and hashPass are the oner our user inputs (but password gets encrypted into hashpass)
          })
          .then(newUser => {
            // console.log("New user is: ", newUser)
            res.redirect("/");
          })
          .catch(error => {
            console.log('Error while creating  new user: ', error);  // closes User.create()
          })
      })
      .catch(error => {      // closes User.findOne()
    next(error);
  })
});
// LOGIN get route - to display the form
router.get('/login', (req, res, next) => {
  res.render('auth/login')
})

//LOGIN POST ROUTE - to get the data from the form and do he password comparison
{/* <form action = "/login" method="post"> */}

router.post('/login',(req, res, next) =>{
  const userLoginEmail = req.body.email;
  const userLoginUsername = req.body.username;
  const userLoginPassword = req.body.password;

  if (userLoginUsername === "" || userLoginEmail === ""|| userLoginPassword === "") {
    res.render("auth/login", { errorMessage: "Indicate a username and a password to Login"});
    return;  //in order to avoid having huge else statment, just put return here!
  }
  User.findOne({ email: userLoginEmail })
  .then( user =>{
    if(!user){
      res.render('auth/login',{errorMessage: 'There is no user with provided email, so please create an account first'});
      return
    }
    // .compareSync () receives 2 arguments: the password user jus inputed inthe login form and the hashed password tha is saved in the DB           
    if(bcrypt.compareSync(userLoginPassword, user.password)){
        // in req.session object create a new key (currentuser) and set it equal to he user we found basen on the userLoginEmail
        // this will make req.session.currentUser available througout the whole app
      req.session.currentUser = user;   //because express-session 

      res.redirect('/')
    } else {
      res.render('auth/login', { errorMessage: 'Incorrect password'});
    
    }
  })
})

// private page set up
router.use((req, res, next) =>{
  if(req.session.currentUser){
    next();
  } else {
    res.redirect('/login');
  }
})

//private page
router.get('/private', (req, res, next) => {
  res.render('user-pages/private-page', {user: req.session.currentUser})
})
router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    // can't access session here
    res.redirect("/login");
  });
});

module.exports = router;