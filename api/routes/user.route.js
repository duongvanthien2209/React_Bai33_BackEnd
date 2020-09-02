const express = require('express');
const router = express.Router();

// Controllers
const userController = require('../controllers/user.controller');

// Tạo User
router.post('/', userController.postCreate);

// Đăng nhập
router.post('/login', userController.postLogin);

module.exports = router;