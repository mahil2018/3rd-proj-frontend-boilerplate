const express = require('express');
const router = express.Router();

const Phone = require('../models/phone-model');


//http://localhost:3001/api/phones  post ()=> save new phone to the DB
router.post('/phones', (req, res, next) => {
    const {brand, model, price, image,  specs} = req.body;
    if (brand =='' || model == '' || price=='', image == '', specs == ''){
      // send error JSON if any of the fields is empty 
      res.status(401).json({ message: "All fields need to be filled."})
      return;
    }

    Phone.create({brand, model, price, image, specs})
    .then(phoneDoc => res.json(phoneDoc))
    .catch(err => next(err))
  });
  //.get()=> get the list from the DB
router.get('/phones', (req, res, next) =>{
  Phone.find()
  .sort({createAt: -1})
  .limit(10)
  // send the received results from the DB as JSOn to the client
  .then(phonesFromDB => res.json(phonesFromDB))
  .catch(err => next(err))
})
 
module.exports = router;
