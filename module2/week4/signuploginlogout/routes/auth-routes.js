const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/signup', (req, res, next) =>{
  console.log('hi');
  res.render('auth/signup');
})
const User = require('../models/user-model');

const bcrypt = require('bcryptjs');
const bcryptSalt = 10;

// router.post('/signup')
router.post('/register', (req, res, next) =>{
const userEmail = req.body.email;
const userPassword = req.body.password;
const userFullName = req.body.fullName;
if (userEmail == '' || userPassword == '' || userFullName == '') {
  req.flash('error', 'please fill all the fields')
  res.render('auth/signup');
  return;
}

User.findOne({ email: userEmail })
.then(foundUser =>{
  if(foundUser !==null){
    req.flash('error', 'Sorry, there is already user with the same email!');
    //here we will redirect to '/login'
    return;
  }
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPassword = bcrypt.hashSync(userPassword, salt);
    User.create({
      email: userEmail,
      password: hashPassword,
      fullName: userFullName
    })
    .then(user => {
      //if all good, log in the user automatically
      // console.log('redirecting to another page:', user);
      req.login(user, (err) => {
        if(err){
          // req.flash.error = 'some message here'
          req.flash('error', 'Auto login does not work so please log in manually');
          req.redirect('/login');
          return;
        }
        res.redirect('/private');
      })
    })  
    .catch( err => next(err)); // closing User.create
  })
  .catch( err => next(err));  //closing User.findOne();
  })

    //=========================LOGIN========
router.get('/login', (req, res, next) =>{
    console.log(user);
    res.render('auth/login');
  })


router.post('/login', passport.authenticate('local', {
  successRedirect: '/private',   // successfully logged in
  failureRedirect: '/login',    // login failed so go to '/login' to try again  
  failureFlash: true,
  passReqToCallback: true
}))

//*************LOGOUT**************** */
router.post('/logout', (req, res, next) =>{
  req.logout();  // logout() method comes from passport and atkes care of the destroying the session for
  res.redirect('/login');
})

//////////////////////////////////////////////////////


///////////////SLACK LOGIN ///////////////////////
router.get('/slack-login', passport.authenticate('slack'));
//  callbackURL: '/slack/callback' => from 'slack-strategy.js'
router.get('/slack/callback', passport.authenticate('slack', {
  successReturnToOrRedirect: '/private',          //===============================
  successFlash: 'Slack login successful',
  failureRedirect: '/login',
  failureMessage: 'Slack login failed, please try to login manually'
}));

//   /slack/callback'



module.exports = router;
