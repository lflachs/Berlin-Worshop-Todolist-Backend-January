const {
	getAllTodolist,
	createTodolist,
	updateTodolist,
	deleteTodolist,
} = require('../controller/todolist.controller');

const router = require('express').Router();

router.get('/', getAllTodolist);
router.post('/', createTodolist);
router.put('/:todolistId', updateTodolist);
router.delete('/:todolistId', deleteTodolist);

module.exports = router;
