const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' });

// Controllers
const bookController = require('../controllers/book.controller');

router.get('/get', (req,res) => { res.send('Book') });

// Lấy tất cả các sách
router.get('/', bookController.getIndex);

// Lấy sách theo loại
router.get('/bookType', bookController.getIndexByBookType);

// Thêm sách
router.post('/:_userId/:_bookType/create', upload.single('file'), bookController.postCreate);

module.exports = router;