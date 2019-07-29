var path=require('path');//her js dosyasında yeniden tanımlaman gerekir
var express=require('express');
var router=express.Router();

module.exports.addbook=function(req,res){
    res.sendFile(path.join(__dirname,'../../Addbook.html'));
}