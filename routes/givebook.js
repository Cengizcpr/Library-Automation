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
    Book.findOne({ isbn: req.body.isbn }, function(err, book) {
        
        if(book ===null){
            res.send({
                error: true, 
                message: "Bu kitap kütüphanede değil"
            });


         } 
          else { 
            if(book.zimmet==true){
                res.send({
                    error: true, 
                    message: "Bu kitap başkasında"
                });
            } else{
            

                    var newZimmet = new Zimmet({
                        student_name:req.body.student_name,
                        student_surname:req.body.student_surname,
                        isbn:req.body.isbn,
                        student_number:req.body.student_number,
                        zimmet:true
                    });

                    
                   
                    newZimmet.save(function(err){
                        

                            Book.findOneAndUpdate({zimmet:false},{zimmet:true},function(err)
                            {
                                if(err){}
                                else{
                                res.send({
                                    error: false, 
                                    message: "Bu kitap sizde"
                                });
                            }


                        
                        })
                            
                          
                        
                    });
                }



            }
                
            });      
                

});module.exports = router;