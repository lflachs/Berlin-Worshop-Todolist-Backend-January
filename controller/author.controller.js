const client = require('../config/prisma-config');

exports.getAllAuthors = async (req, res, next) => {
	try {
		const allBooks = await client.author.findMany();
		res.status(200).json(allBooks);
	} catch (err) {
		next(err);
	}
};
exports.createAuthor = async (req, res, next) => {
	try {
		const { email, firstName, lastName } = req.body;
		const newAuthor = await client.author.create({
			data: { email, firstName, lastName },
		});
		res.status(200).json(newAuthor);
	} catch (err) {
		next(err);
	}
};
exports.updateAuthor = async (req, res, next) => {
	try {
		const authorId = Number(req.params.authorId);
		const { email, firstName, lastName } = req.body;
		const updatedAuthor = await client.author.update({
			data: { email, firstName, lastName },
			where: { id: authorId },
		});
		res.status(200).json(updatedAuthor);
	} catch (err) {
		next(err);
	}
};
exports.deleteAuthor = async (req, res, next) => {
	try {
		const authorId = Number(req.params.authorId);
		const updatedAuthor = await client.author.delete({
			where: { id: authorId },
		});
		res.status(200).json(updatedAuthor);
	} catch (err) {
		next(err);
	}
};
