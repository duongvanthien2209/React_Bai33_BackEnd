const mongoose = require('mongoose');
const schema = mongoose.Schema({
    title: String,
    image: { type: String, default: 'https://picsum.photos/200' },
    description: String,
    _userId: String,
    _bookType: String
});

const Book = mongoose.model('Book', schema, 'books');
module.exports = Book;