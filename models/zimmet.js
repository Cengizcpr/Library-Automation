var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var zimmetSchema = new Schema({
    student_name:{ type: String, required: true, unique: true ,uppercase:true},
    student_surname:{ type: String, required: true, unique: true, uppercase:true},
    isbn: { type: String, required: true, unique: true, uppercase:true},
    student_number: { type:String, required: true, uppercase:true},
    
    zimmet:Boolean
    
});

var Zimmet = mongoose.model('Zimmet', zimmetSchema);



module.exports=Zimmet;