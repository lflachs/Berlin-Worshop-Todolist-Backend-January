const client = require('../config/prisma-config');

exports.getAllBooks = async (req, res, next) => {
	try {
		const allBooks = await client.book.findMany({
			include: { authors: true },
		});
		res.status(200).json(allBooks);
	} catch (err) {
		next(err);
	}
};
exports.getOneBook = async (req, res, next) => {
	try {
		const bookId = Number(req.params.bookId);
		const uniqueBook = await client.book.findUnique({
			where: { id: bookId },
			include: { authors: true },
		});
		res.status(200).json(uniqueBook);
	} catch (err) {
		next(err);
	}
};
exports.getAllBooks = async (req, res, next) => {
	try {
		const allBooks = await client.book.findMany({
			include: { authors: true },
		});
		res.status(200).json(allBooks);
	} catch (err) {
		next(err);
	}
};
exports.createBook = async (req, res, next) => {
	try {
		const { title, cover, authors } = req.body;
		const newBook = await client.book.create({
			data: { title: title, cover: cover, authors: { connect: authors } },
			include: { authors: true },
		});
		res.status(200).json(newBook);
	} catch (err) {
		next(err);
	}
};
exports.updateBook = async (req, res, next) => {
	try {
		const bookId = req.params.bookId;
		const { title, cover } = req.body;
		const updatedBook = await client.book.update({
			where: { id: bookId },
			data: { title, cover },
		});
		res.status(200).json(updatedBook);
	} catch (err) {
		next(err);
	}
};
exports.deleteBook = async (req, res, next) => {
	try {
		const bookId = Number(req.params.bookId);

		const deletedBook = await client.book.delete({
			where: { id: bookId },
		});
		res.status(200).json(deletedBook);
	} catch (err) {
		next(err);
	}
};
