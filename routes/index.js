const router = require('express').Router();
const todolistRoutes = require('./todolist.routes');

router.use('/todolist', todolistRoutes);

module.exports = router;
