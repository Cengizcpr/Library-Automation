var path=require('path');//her js dosyasında yeniden tanımlaman gerekir
var express=require('express');
var router=express.Router();
module.exports.index=function(req,res){
    res.sendFile(path.join(__dirname,'../../Library.html'));
}
module.exports.searchbook=function(req,res){
    res.sendFile(path.join(__dirname,'../../Searchbook.html'));
}
module.exports.givebook=function(req,res){
    res.sendFile(path.join(__dirname,'../../Givebook.html'));
}
module.exports.receivebook=function(req,res){
    res.sendFile(path.join(__dirname,'../../Receivebook.html'));
}
// controllerın görevi isteğe karşılık vermek
// routerın görevi istekleri yönlendirmek

