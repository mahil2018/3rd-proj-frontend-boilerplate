var express = require('express');
var app = express();
// creates an absolute path pointing to a folder called "views"
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.get('/', (req, res, next) => {
    let data = {
        name: "Ironhacker",
        lastName: "Rocking it!"
  };
  res.render('index', data);
});

  app.get('/about', (req, res, next) => {
    let data = {
        name: "Ironhacker",
        bootcamp: "IronHack WebDev"
      };
    
    res.render('about', data);
  });

  app.get('/locations', (req, res, next) => {
    let data = {
      cities: ["Rionegro", "La Experanza", "Puerto Wilches", "Lebrija", "Matanza"]
    };
    res.render('locations', data);
  });

app.get('/hello', (req, res, next) => {
    res.send(`
      <!doctype html>
      <html>
        <head>
          <link rel="stylesheet" href="stylesheets/style.css">
        </head>
        <body>
          This is my second route
        </body>
      </html>
    `);
  });

app.listen(3000);