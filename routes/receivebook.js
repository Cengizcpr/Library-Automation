const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Zimmet=require('../models/zimmet');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

router.get('/receivebook', ensureAuthenticated, (req, res) =>
  res.render('receivebook', {
    book: req.book
  })
);
router.post('/receivebook', (req, res) => {
    const { isbn, student_number } = req.body;

    if (!isbn || !student_number) {
        res.send({
          error: true, 
          message: "Please enter all fields"})
      }else{

    Zimmet.findOne({ student_number: req.body.student_number }, function(err, book) {

        if(book==null)
        {
            res.send({
                error: true, 
                message: "This student is not registered"
            });
        }
        else{
    Book.findOne({ isbn: req.body.isbn }, function(err, book) {
        console.log(book);
        if(book === null){
            res.send({
                error: true, 
                message: "Book not found"
            });


         } 
          else { 
            if(book.zimmet==true){
               


                Zimmet.findOneAndDelete({zimmet:true},function(err)

                { Book.findOneAndUpdate({zimmet:true},{zimmet:false},function(err)
                {
                  
               
                    if(err){}
                    else{
                    res.send({
                        error: false, 
                        message: "This book has been received"
                    });
                }
            
          });
                });



              

            } else{
                res.send({
                    error: true, 
                    message: "This book has not been entrusted to anyone."
                });

            }


            }
                
            });      
        }
                
        }); 
    }
});module.exports = router;