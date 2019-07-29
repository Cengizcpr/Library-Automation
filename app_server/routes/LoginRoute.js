var express=require('express');
var router=express.Router();
var controller=require('../controller/LoginController');




router.get('/',controller.login);



module.exports=router;