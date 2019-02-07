const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  // console.log(req.session.currentUser);
  res.render('index',{ theUser: req.session.currentUser});     //render(view:string, options: Object, callback?:..)
  // console.log(req.session.currentUser);                                                          //
});

module.exports = router;
