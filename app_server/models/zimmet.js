var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var zimmetSchema = new Schema({
    student_name:String,
    student_surname:String,
    isbn: { type: String, required: true, unique: true},
    student_number: { type:String, reequired: true},
    
    zimmet:Boolean
    
});

var Zimmet = mongoose.model('Zimmet', zimmetSchema);



module.exports=Zimmet;