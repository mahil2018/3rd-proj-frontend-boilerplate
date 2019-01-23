const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/exampleApp');
// When successfully connected
mongoose.connection.on('connected', () => {  
    console.log('Mongoose default connection open');
  }); 
const Cat = mongoose.model('Cat', { name: String }); //Cat constructor funcion

function addNewCat(catName) {
  const kitty = new Cat({ name: catName });
  kitty.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log(`meow! ${catName} SAVED.`);
    }
  });
}

function showCats() {
  console.log('All the CATS!');
  Cat.find({}, (err, cats) => {
    cats.forEach((cat)=> {
      console.log(' --> cat: ', cat.name);
    })
  });
}

function addTenCats(){
  for (let i=0; i<10; i++){
    addNewCat(`Ironhacker ${i}`);
  }
}

addTenCats();

/* We have to wait for our cats to save before displaying them
 Remember, it's async */
setTimeout(showCats, 0);
