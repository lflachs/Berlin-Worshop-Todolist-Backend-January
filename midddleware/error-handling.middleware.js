module.exports = (err, req, res, next) => {
	err.status = err.status || 500;
	console.log(err.message);
	if (err.status === 500 && process.env.NODE_ENV === 'production') {
		err.message = 'Something went wrong';
	}
	res.status(err.status).json({ message: err.message });
};
