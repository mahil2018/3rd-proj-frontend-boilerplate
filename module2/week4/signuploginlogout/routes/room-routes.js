const express = require('express');
const router  = express.Router();

const Room = require('../models/room-model');
const User = require("../models/user-model");

router.get('/rooms/add', isLoggedIn, (req, res, next) => {
    res.render('room-pages/addRoom');
});

function isLoggedIn(){
  if(req.user){
    next()
  } else {
    res.redirect('/login');
  }
}



module.exports = router;