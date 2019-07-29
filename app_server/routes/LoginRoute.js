var express=require('express');
var router=express.Router();
var controller=require('../controller/LoginController');

var mongoose=require('mongoose');
var server= '127.0.0.1:27017';
var database='libdb';


router.get('/',controller.login);

class Database{
    constructor(){
        this._connect()
    }
    _connect(){
        mongoose.connect('mongodb://${server}/${database}')
        .then(()=>{
            console.log('Database connection succesful')
        })
        .catch(err=>{
            Console.error('Database connection error')
        })
    }
}


module.exports=router;