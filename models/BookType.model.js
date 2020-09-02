const mongoose = require('mongoose');
const Book = require('./Book.model');
const schema = mongoose.Schema({
    name: String
});

const BookType = mongoose.model('BookType', schema, 'bookTypes');
module.exports = BookType;