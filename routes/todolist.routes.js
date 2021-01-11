const {
	getAllTodolist,
	createTodolist,
	updateTodolist,
	deleteTodolist,
} = require('../controller/todolist.controller');
const {
	createTodolistValidator,
	updateTodolistValidator,
} = require('../validators/todolist.validators');
const authMiddleware = require('../middleware/auth.middleware');

const router = require('express').Router();

router.get('/', authMiddleware, getAllTodolist);
router.post('/', authMiddleware, createTodolist);
router.put('/:todolistId', updateTodolistValidator, updateTodolist);
router.delete('/:todolistId', deleteTodolist);

module.exports = router;
