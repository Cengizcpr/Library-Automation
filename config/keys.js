var mongoose = require ('mongoose');

mongoose.Promise = require('bluebird');

var mongoDB = 'mongodb://localhost/library';

mongoose.connect(mongoDB,function(err,errr){
    if (err){
        console.log('mongoose hatasi:' + err);
    }else{
        console.log('mongoose baglandi:' + mongoDB);
    }
    
});