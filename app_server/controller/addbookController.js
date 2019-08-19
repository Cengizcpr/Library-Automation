var express = require('express');
var Book = require('../models/book'); 
var app = express();

module.exports.addbookGet=function(req,res){
    res.render('addbook');
};

module.exports.addbookPost = function(req,res){
       // res.redirect('addbook');
       
    console.log(req.body);

    var newBook = new Book({
        book_name:req.body.book_name,
        author:req.body.author,
        isbn:req.body.isbn,
        publisher:req.body.publisher,
        category:req.body.category,
        zimmet:false
    });

    newBook.save(function(err){
        if(err){
            res.send({
                error: true, 
                message: "Book not Added"
            });
        }else{
            res.send({
                error: false, 
                message: "Book Added"
            });
          //  res.render('addbook');
        }
    });
};
