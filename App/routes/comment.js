var express = require('express');
const controller = require('../controller/comment.controller')

var router = express.Router();

router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

module.exports = router;
