var express=require('express');
var router=express.Router();
var controller=require('../controller/AddbookController');
router.get('/',controller.addbook);


module.exports=router;