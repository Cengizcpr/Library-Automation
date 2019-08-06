var express=require('express');

var router=express.Router();

var ctrlSearchbook=require('../controller/searchbookController');

router.get('/', ctrlSearchbook.searchbookGet);
router.post('/', ctrlSearchbook.searchbookPost);


module.exports=router;
