const express = require('express');
const app = express();
const mainRouter = require('./routes');
const errorMiddleware = require('./middleware/error-handling.middleware');

const PORT = process.env.PORT || 8000;

app.use(mainRouter);

app.use('*', (req, res, next) => {
	const error = new Error('Not found');
	error.status = 404;
	next(error);
});

app.use(errorMiddleware);

app.listen(PORT, () => {
	console.log(`app is running on ${PORT}`);
});
