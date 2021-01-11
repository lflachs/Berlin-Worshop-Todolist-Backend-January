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

const router = require('express').Router();

router.get('/', getAllTodolist);
router.post('/', createTodolistValidator, createTodolist);
router.put('/:todolistId', updateTodolistValidator, updateTodolist);
router.delete('/:todolistId', deleteTodolist);

module.exports = router;
