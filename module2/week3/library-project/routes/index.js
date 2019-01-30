const express = require('express');
const router  = express.Router();
const Book = require('../models/book')



/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/books', (req, res, next) => {
  Book.find()
    .then(books => {
      res.render("books", { books : books });
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/book/:id', (req, res, next) => {
  let bookId = req.params.id;
  Book.findOne({'_id': bookId})
    .then(book => {
      res.render("book-detail", { book })
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/books/add', (req, res, next) => {
  res.render("book-add");
});

router.post('/books/add', (req, res, next) => {
  const {name, author, description, rating} = req.body;
  const newBook = new Book({ name, author, description, rating});
  newBook.save()
  .then((book) => {
    console.log(book);
    res.redirect('/books');
  })
  .catch((error) => {
    console.log(error);
  })
});

router.get('/books/edit', (req, res, next) => {
  Book.findOne({_id: req.query.book_id})
  .then((book) => {
    res.render("book-edit", {book});
  })
  .catch((error) => {
    console.log(error);
  })
});

router.post('/books/edit', (req, res, next) => {
  //http://localhost:3000/books/edit?book_id=5c521ca3bceed30879ba16f4
  const { name, author, description, rating } = req.body;
  Book.update({_id: req.query.book_id}, { $set: {name, author, description, rating }})
  .then((book) => {
    res.redirect('/books');
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;
