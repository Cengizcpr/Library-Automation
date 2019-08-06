var Book = require('../models/book'); 

module.exports.searchbookGet=function(req,res){
    res.render('searchbook');
};

module.exports.searchbookPost = function(req,res){
    Book.findOne({ book_name:  req.body.book_name }, function(err, book) {
        
        if(book ===null){
            res.send({
                error: true, 
                message: "Kitap bulunamadı"
            })
        }  else { 
            res.send(book)
           
        }
    });
};