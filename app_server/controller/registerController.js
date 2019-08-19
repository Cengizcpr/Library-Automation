var User = require('../models/user'); 

module.exports.signupGet = function(req,res){

    res.render('signup');
};

module.exports.signupPost = function(req,res){

    console.log(req.body);

    var newUser = new User({
        name:req.body.name,
        surname:req.body.surname,
        username:req.body.username,
        password:req.body.password,
        email:req.body.email
    });

    newUser.save(function(err){
        if(err){
            res.send({
                error: true, 
                message: "Kullanıcı kayıtlı"
            });
        }else{
            console.log('kullanıcı kaydedildi')
           res.render('login');
        }
    });

    
        
};
