var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookSchema = new Schema({
    book_name:String,
    author:String,
    isbn: { type: String, required: true, unique: true},
    publisher: { type:String, reequired: true},
    category:String,
    zimmet:Boolean
    
});

var Book = mongoose.model('Book', bookSchema);



module.exports=Book;