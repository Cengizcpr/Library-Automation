var express=require('express');

var router=express.Router();

var ctrlGivebook=require('../controller/givebookController');

router.get('/', ctrlGivebook.givebookGet);
router.post('/', ctrlGivebook.givebookPost);


module.exports=router;
