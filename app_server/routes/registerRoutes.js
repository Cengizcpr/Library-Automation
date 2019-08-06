var express=require('express');

var router=express.Router();

var ctrlRegister=require('../controller/registerController');


router.get('/', ctrlRegister.signupGet);
router.post('/', ctrlRegister.signupPost);

module.exports=router;
