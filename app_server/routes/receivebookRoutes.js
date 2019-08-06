var express=require('express');

var router=express.Router();

var ctrlReceivebook=require('../controller/receivebookController');

router.get('/', ctrlReceivebook.receivebookGet);
router.post('/', ctrlReceivebook.receivebookPost);


module.exports=router;
