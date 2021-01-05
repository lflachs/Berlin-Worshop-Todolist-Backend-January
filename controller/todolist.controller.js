const client = require('../config/prisma-config');
const createError = require('http-errors');

const findTodolist = async (id) => {
	const todolist = await client.todolist.findUnique({ where: { id } });
	if (!todolist) {
		throw new createError(404, 'todolist not found');
	}
};
exports.getAllTodolists = async (req, res, next) => {
	try {
		const todolists = await client.todolist.findMany();
		res.status(200).json(todolists);
	} catch (err) {
		next(err);
	}
};
exports.getTodolist = async (req, res, next) => {
	try {
		const todolistId = Number(req.params.todolistId);
		await findTodolist(todolistId);
		const todolist = await client.todolist.findUnique({
			where: { id: todolistId },
			include: { task: true },
		});
		res.status(200).json(todolist);
	} catch (err) {
		next(err);
	}
};

exports.createTodolist = async (req, res, next) => {
	try {
		const newTitle = req.body.title;
		const createdTodolist = await client.todolist.create({
			data: { title: newTitle },
		});
		res.status(200).json(createdTodolist);
	} catch (err) {
		next(err);
	}
};

exports.updateTodolist = async (req, res, next) => {
	try {
		const todolistId = Number(req.params.todolistId);
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

exports.createTask = async (req, res, next) => {
	try {
		const todolistId = Number(req.params.todolistId);
		await findTodolist(todolistId);
		const newTitle = req.body.title;
		const createdTask = await client.task.create({
			data: {
				title: newTitle,
				done: false,
				todolist: { connect: { id: todolistId } },
			},
		});
		res.status(200).json(createdTask);
	} catch (err) {
		next(err);
	}
};

exports.updateTask = async (req, res, next) => {
	try {
		const todolistId = Number(req.params.todolistId);
		await findTodolist(todolistId);
		const taskId = Number(req.params.taskId);
		const newTitle = req.body.title;
		const newDone = req.body.done;
		const updatedTodolist = await client.task.update({
			where: { id: taskId },
			data: { title: newTitle, done: newDone },
		});
		res.status(200).json(updatedTodolist);
	} catch (err) {
		next(err);
	}
};

exports.deleteTask = async (req, res, next) => {
	try {
		const todolistId = Number(req.params.todolistId);
		const taskId = Number(req.params.taskId);

		await findTodolist(todolistId);
		const deletedTask = await client.task.delete({
			where: { id: taskId },
		});
		res.status(200).json(deletedTask);
	} catch (err) {
		next(err);
	}
};
