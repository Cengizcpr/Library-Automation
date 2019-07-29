var express=require('express');
var router=express.Router();
var controller=require('../controller/RegisterController');


router.get('/',controller.register);


module.exports=router;