const express = require('express');
const router = express.Router();










router.get('/authors/new', (req, res, next) =>{
  //make sure to see all the folders that are inside the views
  res.render('author-views/new-author');
})
//post() to send the data user put in the form to the database
{/* <form action="/authors/create" method="post"> */}
router.post('/authors/create', (req, res, next) =>{
  console.log("data that user put in the form: ", req.body)
})

module.exports = router;
