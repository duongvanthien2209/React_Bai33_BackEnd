const express = require('express');
const router = express.Router();

// Controllers
const bookTypeController = require('../controllers/bookType.controller');

// Lấy danh sách các loại sách
router.get('/', bookTypeController.getIndex);

module.exports = router