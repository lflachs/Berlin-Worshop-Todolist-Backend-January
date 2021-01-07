const router = require('express').Router();
const todolistRouter = require('./todolist.routes');
const bookRouter = require('./book.routes');
const authorRouter = require('./author.routes');

router.use('/todolist', todolistRouter);
router.use('/book', bookRouter);
router.use('/author', authorRouter);

module.exports = router;
