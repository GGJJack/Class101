var express = require('express');
const controller = require('../controller/user.controller')

var router = express.Router();

router.get('/:userId([0-9a-f]{24})', controller.getUserInfo);
router.post('', controller.regist);

module.exports = router;
