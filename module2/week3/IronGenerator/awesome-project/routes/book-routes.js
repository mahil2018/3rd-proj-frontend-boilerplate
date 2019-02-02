const express  = require('express');
const router   = express.Router();

const Book      = require('../models/book-model')
const Author    = require('../models/author-model')

// get() => to display
router.get('/create', (req, res, next) =>{
  Author.find()
    .then(theAuthors =>{
      console.log("theAuthors: ", theAuthors)
      res.render('books-views/new-book', {authorsFromDB: theAuthors});
    })
    .catch(err =>{ console.log('Error while displaying a form to create a new book: ', err)})
})

//create
router.post('/create', (req, res, next) =>{
//   console.log(req.body)
  // const {theTitle, theDescription, theAuthor, theRating, theImage } = req.body
  Book.create({
    title: req.body.theTitle,
    description : req.body.theDescription,
    author: req.body.theAuthor,
    rating: req.body.theRating,
    image: req.body.theImage
  })
    .then(newBook => {
      console.log('New Book created: ', newBook)
      res.redirect('/books')
    })
    .catch(err => console.log('Error while creating a new book: ', err))
})

//get all the books from the database
// '/' => here means : local host 3000/books because we have 
router.get('/', (req, res, next) => {
  Book.find()
    .then(allBooks => {
      res.render('books-views/books', {books : allBooks})
    })
    .catch(err => { console.log('Error while getting books: ', err)})

})

//get the details of a book from the DB
//http://localhost:3000/books/5c453363455645657
//router.get('/books/:bookId) => / books is pre-filled andk bookId is just a placeholder, can be any word
router.get('/:bookId', (req, res, next) =>{
    const theBookId = req.params.bookId;
    //.populate ('author) => we are saying : give me all the datails related to the 'author field in the book
    //(ther's only author id there so what it does is-finds the rest of information related to taht author
    Book.findById(theBookId).populate('author')
    .then(theBook => {
    //   console.log('the requested book is the book: ', theBook)
    //   res.redirect(`/books/${theBookId}`)
      res.render('books-views/book-details', {book: theBook});
      console.log(book);
    })
    .catch(err => console.log('Error while getting the Book: ', err));
})

//Delete the book route
router.post('/:theBookId', (req, res, next)=>{
  Book.findByIdAndRemove(req.params.theBookId)
    .then(theBook => {
      // console.log('deleted book is: ', theBook)
      res.redirect('/books')
    })
    .catch(err => console.log('Error while deleting the Book: ', err))
})

module.exports = router