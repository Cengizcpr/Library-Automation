var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:String,
    surname:String,
    username: { type: String, required: true, unique: true},
    password: { type:String, reequired: true},
    email:String
});

var User = mongoose.model('User', userSchema);



module.exports=User;