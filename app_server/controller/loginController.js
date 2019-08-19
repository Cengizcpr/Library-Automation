var express = require('express');
var app = express();
var User = require('../models/user'); 

module.exports.indexGet=function(req,res){
  
    res.render('login');
};

module.exports.indexPost=function(req,res){

    
User.findOne({username:req.body.username},function(err,data){
    if(data){
			
        if(data.password==req.body.password){
        console.log("Done Login");
        
        console.log(req.body);
        res.render('home');
            
        }else{
            console.log("wrong password");
            res.send({
                error: true, 
                message: "Wrong Password"
            })
        }
    }else{
        console.log("Username not registered");
        res.send({
            error: true, 
            message: "Username not registered"
        })
    }
});

    //console.log(req.body);
    //res.render('login');
    
};

module.exports.signupGet = function(req,res){

    res.render('signup');
};



