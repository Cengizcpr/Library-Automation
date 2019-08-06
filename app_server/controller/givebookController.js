
var Zimmet = require('../models/zimmet'); 
var Book = require('../models/book'); 
module.exports.givebookGet=function(req,res){
    res.render('givebook');
};

module.exports.givebookPost = function(req,res){
   

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
                
           
        
        



          
};
/*var newZimmet = new Zimmet({
    student_name:req.body.student_name,
    student_surname:req.body.student_surname,
    isbn:req.body.isbn,
    student_number:req.body.student_number,
    zimmet:true
});


newZimmet.save(function(err){
    if(err){
        res.send({
            error: true, 
            message: "Bu kitap başkasında"
        });
    }else{
        res.send({
            error: true, 
            message: "Bu kitap sizde"
        });
      //  res.render('addbook');
    }
});*/