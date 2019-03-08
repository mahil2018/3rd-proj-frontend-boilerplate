const passport = require('passport');
// require coneect-flash for flash messages
const flash = require('connect-flash');

const User = require('../../models/user-model');

/////////////////////////////
require('./local-strategy');

//serializeUser => what to be saved in the session
                                //cb stands for callback
passport.serializeUser((User, cb)=> {
  //null === no errors, all good
  cb(null, User._id)
  
})
// deserializeUser => retrieve users' data from the database
//this function gets called every time we request for a user (every time when we need re.user)
passport.deserializeUser((userId, cb) =>{
  User.findById(userId)
  .then(user =>{
    cb(null, user);
  })
  .catch( err => cb(err));
})
// **************
//import passport
// const passport = require('passport');
//*************** 
function passportBasicSetup(blah){
  // passport super power
  blah.use(passport.initialize()); // 'fires' the passport packaage
  blah.use(passport.session());    // connects passport to the session

  // to activate flash messages:
  blah.use(flash());

  blah.use((req, res, next) => {
    res.locals.messages = req.flash();
    if(req.user){
      res.locals.currentUser = req.user;  // make currentUser variable global available in all hbs whenever we have to use
    } 
    next();
  })
}

module.exports = passportBasicSetup;