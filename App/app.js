const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config()
require('./db/db')

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);

app.use(function (req, res, next) {
	next(createError(404));
});

app.use(function (err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500).send(err.message);
});

module.exports = app;