var express=require('express');
var router=express.Router();
var controller=require('../controller/LibraryController');
router.get('/',controller.index);
router.get('/searchbook',controller.searchbook);
router.get('/givebook',controller.givebook);
router.get('/receivebook',controller.receivebook);

module.exports=router;
