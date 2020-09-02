// Models
const Book = require('../../models/Book.model');

module.exports.getIndex = async (req, res) => {
    let { _page } = req.query;
    let result = { success: true };

    let pageLimit = 20;
    let books;

    try {
        if (!_page) {
            books = await Book.find().skip(0).limit(pageLimit);
        } else {
            books = await Book.find().skip((_page - 1) * pageLimit).limit(pageLimit);
        }

        result.books = books;
        res.json(result);
    } catch (error) {
        result.success = false;
        res.json(result);
        return;
    }
}

module.exports.getIndexByBookType = async (req, res) => {
    let { _bookType, _page } = req.query;

    let result = { success: true };

    let pageLimit = 20;
    let books;

    try {
        _page = parseInt(_page);
        if (!_page) {
            books = await Book.find({ _bookType }).skip(0).limit(pageLimit);
        } else {
            books = await Book.find({ _bookType }).skip((_page - 1) * pageLimit).limit(pageLimit);
        }

        result.books = books;
        res.json(result);
    } catch (error) {
        result.success = false;
        res.json(result);
        return;
    }
}

module.exports.postCreate = async(req,res) => {
    let { title, description } = req.body;
    let { _userId, _bookType } = req.params; 
    let file = req.file;

    let result = { success: true };

    try {
        if(!title || !description || !_userId || !_bookType || !file) {
            throw new Error();
        }

        let image = file.path.split('\\').slice(1).join('/');
        let book = new Book({ title, description, image, _userId, _bookType });
        await book.save();
    } catch (error) {
        result.success = false;
        res.json(result);
        return;
    }

    res.json(result);
}