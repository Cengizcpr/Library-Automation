var express=require('express');
var router=express.Router();
var controller=require('../controller/SearchbookController');

router.get('/',controller.searchbook);

module.exports=router;
