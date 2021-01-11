const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

exports.getAllTodolist = async (req, res, next) => {
	try {
		const todolists = await client.todolist.findMany();
		res.status(200).json(todolists);
	} catch (err) {
		next(err);
	}
};
// req contain information
// process information etc
// response -
exports.createTodolist = async (req, res, next) => {
	try {
		const title = req.body.title;
		const createdTodolist = await client.todolist.create({
			data: { title: title },
		});
		res.status(200).json(createdTodolist);
	} catch (err) {
		next(err);
	}
};

exports.updateTodolist = async (req, res, next) => {
	try {
		const todolistId = req.params.todolistId;
		const newTitle = req.body.title;
		const updatedTodolist = await client.todolist.update({
			where: { id: todolistId },
			data: { title: newTitle },
		});
		res.status(200).json(updatedTodolist);
	} catch (err) {
		next(err);
	}
};

exports.deleteTodolist = async (req, res, next) => {
	try {
		const todolistId = Number(req.params.todolistId);
		const deletedTodolist = await client.todolist.delete({
			where: { id: todolistId },
		});
		res.status(200).json(deletedTodolist);
	} catch (err) {
		next(err);
	}
};
