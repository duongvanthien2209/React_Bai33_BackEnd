const express = require('express');
const router = express.Router();

// Routes
const userRoute = require('../api/routes/user.route');
const bookRoute = require('../api/routes/book.route');
const bookTypeRoute = require('../api/routes/bookType.route');

router.use('/users', userRoute);
router.use('/books', bookRoute);
router.use('/bookTypes', bookTypeRoute);

module.exports = router;