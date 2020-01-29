const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Zimmet=require('../models/zimmet');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

router.get('/givebook', ensureAuthenticated, (req, res) =>
  res.render('givebook', {
    book: req.book
  })
);
router.post('/givebook', (req, res) => {
    const { student_name, student_surname, isbn, student_number } = req.body;

    if (!student_name || !student_surname  || !isbn || !student_number) {
        res.send({
          error: true, 
          message: "Please enter all fields"})
      }else{


    Book.findOne({ isbn: req.body.isbn }, function(err, book) {
        
        if(book ===null){
            res.send({
                error: true, 
                message: "This book is not in library"
            });


         } 
          else { 
            if(book.zimmet==true){
                res.send({
                    error: true, 
                    message: "This book is now in someone else's hands."
                });
            } else{
                Zimmet.findOne({student_number: req.body.student_number}, function(err, book){
                    if(book!=null)
                    {
                        res.send({
                            error: true, 
                            message: "This student can only take one book."
                        });
                    }
                
            
            else{
            
                    var newZimmet = new Zimmet({
                        student_name:req.body.student_name,
                        student_surname:req.body.student_surname,
                        isbn:req.body.isbn,
                        student_number:req.body.student_number,
                        zimmet:true
                    });
                  

                    
                   
                    newZimmet.save(function(err){
                      
                           
                            Book.findOneAndUpdate({zimmet:false,isbn:req.body.isbn},{zimmet:true},function(err)
                            {
                                if(err){}
                                else{
                                res.send({
                                    error: false, 
                                    message: "This book was entrusted"
                                });
                            }


                        
                        })
                    
                    
                          
                        
                    });
                }
                });
                }
                


            }
                
            });      
                
        }
});module.exports = router;