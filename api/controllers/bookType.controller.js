// Models
const BookType = require('../../models/BookType.model');

module.exports.getIndex = async (req, res) => {
    let result = { success: true };

    try {
        let bookTypes = await BookType.find();

        result.bookTypes = bookTypes;
    } catch (error) {
        result.success = false;
        res.json(result);
        return;
    }

    res.json(result);
}