const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


router.get('/addbook', ensureAuthenticated, (req, res) =>
  res.render('addbook', {
    user: req.user
  })
);
router.post('/addbook', (req, res) => {
    const { bookname, author, isbn, publisher,category } = req.body;
    let errors = [];

  
    if (!bookname || !author  || !isbn || !publisher) {
      res.send({
        error: true, 
        message: "Please enter all fields"})
    }
  
  
    if (errors.length > 0) {
     res.render('addbook', {
        errors,
        bookname,
        author,
        isbn,
        publisher,
        category
      });
     


    } else {
      Book.findOne({ isbn: isbn }).then(book => {
        if (book) {
          res.send({
            error: true, 
            message: "Book not added"
          });

          res.render('addbook', {
            errors,
             bookname,
            author,
            isbn,
            publisher,
            category
          });
        } else {
          const newBook = new Book({
            bookname,
            author,
            isbn,
            publisher,
            category,
          
            zimmet:false
          });
  
            
              newBook
                .save()
                .then(book => {
                 res.send({
                error: false, 
                message: "Book Added"
                 });

                 res.redirect('/addbook');
                })
                .catch(err => console.log(err));
         
        }
      });
    }
    
})


module.exports = router;