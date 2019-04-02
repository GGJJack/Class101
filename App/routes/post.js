var express = require('express');
const controller = require('../controller/post.controller')

var router = express.Router();

router.post('/create', controller.createPost);
router.get('/:postId([0-9a-f]{24})', controller.viewPost);
router.put('/:postId([0-9a-f]{24})', controller.updatePost);
router.delete('/:postId([0-9a-f]{24})', controller.removePost);

module.exports = router;
