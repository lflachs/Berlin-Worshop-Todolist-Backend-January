const {
	createTodolist,
	getAllTodolists,
	deleteTodolist,
	updateTodolist,
	createTask,
	updateTask,
	deleteTask,
	getTodolist,
	getAllTasks,
} = require('../controller/todolist.controller');

const router = require('express').Router();

router.post('/', createTodolist);
router.get('/', getAllTodolists);
router.get('/tasks', getAllTasks);
router.get('/:todolistId', getTodolist);
router.put('/:todolistId', updateTodolist);
router.delete('/:todolistId', deleteTodolist);

router.post('/:todolistId/task', createTask);

router.put('/:todolistId/task/:taskId', updateTask);
router.delete('/:todolistId/task/:taskId', deleteTask);

module.exports = router;
