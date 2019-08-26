const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

router.get('/searchbook', ensureAuthenticated, (req, res) =>
  res.render('searchbook', {
    book: req.book
  })
);
router.post('/searchbook', (req, res) => {
Book.findOne({ bookname:  req.body.bookname }, function(err, book) {
        
        if(book ===null){
            res.send({
                error: true, 
                message: "Kitap bulunamadı"
            })
        }  else { 
          res.send(book);
           
           
        }
    });

});module.exports = router;