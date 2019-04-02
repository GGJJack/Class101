var express = require('express');
const controller = require('../controller/post.controller')

var router = express.Router();

router.get('', controller.getPostList);
router.post('', controller.createPost);
router.get('/:postId([0-9a-f]{24})', controller.viewPost);
router.put('/:postId([0-9a-f]{24})', controller.updatePost);
router.delete('/:postId([0-9a-f]{24})', controller.removePost);

router.get('/:postId([0-9a-f]{24})/comment', controller.getCommentList)
router.post('/:postId([0-9a-f]{24})/comment', controller.createComment)
router.get('/:postId([0-9a-f]{24})/comment/:commentId([0-9a-f]{24})', controller.viewComment)
router.put('/:postId([0-9a-f]{24})/comment/:commentId([0-9a-f]{24})', controller.updateComment)
router.delete('/:postId([0-9a-f]{24})/comment/:commentId([0-9a-f]{24})', controller.removeComment)

module.exports = router;
