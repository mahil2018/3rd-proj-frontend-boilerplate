const passport = require('passport');
const SlackStrategy = require('passport-slack').Strategy;
const User = require('../../models/user-model');

// we don't need bcrypt because we won't be dealing with passwords

//to activate slack ===========================================================
  passport.use(new SlackStrategy({
//clienID and clienSecret are given names from Slack API
//slackClientId is the name we gave to our variable in .env
    clientID: process.env.slackClientId,
    clientSecret: process.env.slackClientSecret,
    callbackURL: '/slack/callback',
    proxy: true, /// not important now , but yes when in production
  }, (accessToken, refreshToken, userInfo, cb) => {
    // console.log('who is this:', userInfo);
    const { email, name } = userInfo.user;
    // const email = userInfo.user.email is the previous instruction
    // this is the same as sayin cosnt email = userInfo.user.email +++*@
    User.findOne({ $or:[
      // email: email
      { email },
      { slackID: userInfo.user.id}
    ]})
    .then( user =>{
      if(user) {
        //log the user in if we found the account inour DB
        cb(null, user);
        return;
      }
      User.create({
        //email: email
        email,
        fullName: name,
        slackID: userInfo.user.id
      })
      .then( newUser =>{
        cb(null, newUser);
      })
      .catch( err => next(err))   // close User.creat()
    })

  }));

