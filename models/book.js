const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
    uppercase:true
  },
  author: {
    type: String,
    required: true,
    uppercase:true
  },
  isbn: {
    type: String,
    required: true,
    uppercase:true
  },
  publisher: {
    type: String,
    required: true,
    uppercase:true
  },
    category: {
    type: String,
    required: true,
    uppercase:true
  },
  zimmet: {
    type: Boolean
 
  },
  date:{
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
