const router = require('express').Router();
const todolistRoutes = require('./todolist.routes');
const authRoutes = require('./auth.routes');

router.use('/todolist', todolistRoutes);
router.use('/auth', authRoutes);

module.exports = router;
