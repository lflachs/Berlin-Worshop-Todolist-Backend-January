const router = require('express').Router();
const todolistRouter = require('./todolist.routes');

router.use('/todolist', todolistRouter);

module.exports = router;
