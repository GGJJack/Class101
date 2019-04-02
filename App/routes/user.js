var express = require('express');
const controller = require('../controller/user.controller')

var router = express.Router();

router.post('', controller.regist);
router.get('/:userId([0-9a-f]{24})', controller.getUserInfo);
router.get('/:userId([0-9a-f]{24})/posts', controller.getPostList);
router.get('/:userId([0-9a-f]{24})/comments', controller.getCommentList);

module.exports = router;
