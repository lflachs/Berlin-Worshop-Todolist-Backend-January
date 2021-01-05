const { getAllTodolist } = require('../controller/todolist.controller');
const router = require('express').Router();

router.get('/', getAllTodolist);

module.exports = router;
