const router = require('express').Router();
const {
	getAllBooks,
	getOneBook,
	createBook,
	updateBook,
	deleteBook,
} = require('../controller/book.controller');
const {
	createBookValidation,
	updateBookValidation,
} = require('../validators/book.validator');

router.post('/', createBookValidation, createBook);
router.get('/', getAllBooks);
router.get('/:bookId', getOneBook);
router.put('/:bookId', updateBookValidation, updateBook);
router.delete('/:bookId', deleteBook);

module.exports = router;
