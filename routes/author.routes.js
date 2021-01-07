const router = require('express').Router();

const {
	getAllAuthors,
	createAuthor,
	updateAuthor,
	deleteAuthor,
} = require('../controller/author.controller');

router.get('/', getAllAuthors);
router.post('/', createAuthor);
router.put('/:authorId', updateAuthor);
router.delete('/:authorId', deleteAuthor);

module.exports = router;
