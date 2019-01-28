const express = require('express');
const app     = express();
const hbs     = require('hbs');
//make the POST request body info readable by installing bodyParser
const bodyParser = require('body-parser');
// app.use(myFakeMiddleware)



//Static Configuration
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
//The Request Body using bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(myFakeMiddleware)
//========== A Form with GET ===========
//Step 1 - Display a form
app.get('/', (req, res) => {
    res.render('user-info-form');
    // console.log(res)
});

//2. Access information through req.query
app.get('/display-user-info', (req, res) => {
    let name      = req.query.name;
    let age       = req.query.age;
    let superhero = req.query.superhero;
  
    res.send(`
      Your name is ${name}
      Your age is ${age}
      Your favorite superhero is ${superhero}
    `)
  });

  app.get('/login', (req, res) => {
    res.render('login')
  });

  app.post('/login', (req, res) => {
    // let email     = req.body.email;
    // let password  = req.body.password;
    const {email, password} = req.body;
    if (email == "mariahromero@hotmail.com" && password == "maria"){
      res.send('Welcome')
    } else {
       res.send('go away')
    }
  
  });
    // res.send(`Email: ${email}, password: ${password}`);
  // });
 

  app.get('/test', (req, res) => {
    let mySecret = req.secretValue;
    res.send(mySecret);
  });

  function myFakeMiddleware(req, _, next){
    console.log("myFakeMiddleware was called!");
    req.secretValue = "swordfish";
    next();
  }




app.listen(3000, () => console.log('Listening on port 3000'))