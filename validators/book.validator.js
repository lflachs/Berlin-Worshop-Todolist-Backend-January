const { check, validationResult } = require('express-validator');

const checkTitle = () => {
	return check('title')
		.not()
		.isEmpty()
		.withMessage('title cannot be empty')
		.isLength({ min: 5 })
		.withMessage('Title should contain at least 5 characters');
};

exports.updateBookValidation = [
	checkTitle(),
	check('bookId').toInt().isInt({ gt: 0 }).withMessage('incorrect todolist Id'),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	},
];

exports.createBookValidation = [
	checkTitle(),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	},
];
