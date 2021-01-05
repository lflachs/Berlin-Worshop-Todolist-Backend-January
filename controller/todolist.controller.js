const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

exports.getAllTodolist = async (req, res, next) => {
	try {
		const todolists = await client.todolit.findMany();
		res.status(200).json(todolists);
	} catch (err) {
		next(err);
	}
};
