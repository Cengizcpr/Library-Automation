var express=require('express');

var router=express.Router();

var ctrlLogin=require('../controller/addbookController');

router.get('/', ctrlLogin.addbookGet);
router.post('/', ctrlLogin.addbookPost);


module.exports=router;
