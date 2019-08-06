var Zimmet = require('../models/zimmet'); 
var Book = require('../models/book'); 

module.exports.receivebookGet=function(req,res){
    res.render('receivebook');
};

module.exports.receivebookPost = function(req,res){
    Zimmet.findOne({ student_number: req.body.student_number }, function(err, book) {

        if(book==null)
        {
            res.send({
                error: true, 
                message: "Böyle bir öğrenci yok"
            });
        }
        else{
    Book.findOne({ isbn: req.body.isbn }, function(err, book) {
        console.log(book);
        if(book === null){
            res.send({
                error: true, 
                message: "Bu kitap kütüphanede değil"
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
                        message: "Bu kitap silindi"
                    });
                }
            
          });
                });



              

            } else{
                res.send({
                    error: true, 
                    message: "Bu kitap kimsede değil"
                });

            }


            }
                
            });      
        }
                
        }); 
        
};