const db = require('../db/db')

const createPost = (req, res) => {
	let title = req.body.title
	let content = req.body.content
	let userId = req.body.userId

	if (!title || !content || !userId) return res.status(400).json({ reason: "MISSING_PARAMS" })

	db.createPost(title, content, userId).then((post) => {
		console.log(post)
		res.status(201).json({ success: true, id: post._id })
	}, (err) => {
		console.log(err)
		res.status(500).json({ reason: "QUERY_FAILED" })
	})
}

const viewPost = (req, res) => {
	let postId = req.params.postId

	if (!postId) return res.status(400).json({ reason: "MISSING_PARAMS" })

	db.viewPost(postId).then((post) => {
		if (!post) return res.status(404).json({ reason: "NOT_FOUND" })
		res.status(200).json(post)
	}, (err) => {
		console.log(err)
		res.status(500).json({ reason: "QUERY_FAILED" })
	})
}

const updatePost = (req, res) => {
	let postId = req.params.postId

	if (!postId) return res.status(400).json({ reason: "MISSING_PARAMS" })

	let post = {}
	if (req.body.title) post.title = req.body.title
	if (req.body.content) post.content = req.body.content

	if (Object.keys(post).length <= 0) return res.status(400).json({ reason: "MISSING_PARAMS" })

	db.updatePost(postId, post).then((post) => {
		if (!post) return res.status(404).json({ reason: "NOT_FOUND" })
		res.status(201).json(post)
	}, (err) => {
		console.log(err)
		res.status(500).json({ reason: "QUERY_FAILED" })
	})
}

const removePost = (req, res) => {
	let postId = req.params.postId

	if (!postId) return res.status(400).json({ reason: "MISSING_PARAMS" })

	db.removePost(postId).then((post) => {
		if (!post) return res.status(404).json({ reason: "NOT_FOUND" })
		res.status(201).json(post)
	}, (err) => {
		console.log(err)
		res.status(500).json({ reason: "QUERY_FAILED" })
	})
}

const createComment = (req, res) => {
	let postId = req.params.postId
	let userId = req.body.userId
	let content = req.body.content

	if (!postId || !content || !userId) return res.status(400).json({ reason: "MISSING_PARAMS" })

	db.createComment(userId, postId, content).then((comment) => {
		console.log(comment)
		res.status(201).json({ success: true, id: comment._id })
	}, (err) => {
		console.log(err)
		res.status(500).json({ reason: "QUERY_FAILED" })
	})
}

const viewComment = (req, res) => {
	let commentId = req.params.commentId

	if (!commentId) return res.status(400).json({ reason: "MISSING_PARAMS" })

	db.viewComment(commentId).then((comment) => {
		if (!comment) return res.status(404).json({ reason: "NOT_FOUND" })
		res.status(200).json(comment)
	}, (err) => {
		console.log(err)
		res.status(500).json({ reason: "QUERY_FAILED" })
	})
}

const updateComment = (req, res) => {
	let commentId = req.params.commentId
	let content = req.body.content

	if (!commentId || !content) return res.status(400).json({ reason: "MISSING_PARAMS" })

	db.updateComment(commentId, content).then((comment) => {
		if (!comment) return res.status(404).json({ reason: "NOT_FOUND" })
		res.status(201).json(comment)
	}, (err) => {
		console.log(err)
		res.status(500).json({ reason: "QUERY_FAILED" })
	})
}

const removeComment = (req, res) => {
	let commentId = req.params.commentId

	if (!commentId) return res.status(400).json({ reason: "MISSING_PARAMS" })

	db.removeComment(commentId).then((comment) => {
		if (!comment) return res.status(404).json({ reason: "NOT_FOUND" })
		res.status(201).json(comment)
	}, (err) => {
		console.log(err)
		res.status(500).json({ reason: "QUERY_FAILED" })
	})
}

const getPostList = (req, res) => {
	let offset = parseInt(req.query.offset, 10) || 0
	let limit = parseInt(req.query.limit, 10) || 20

	db.getPostList(offset, limit).then((posts) => {
		if (!posts) return res.status(404).json({ reason: "NOT_FOUND" })
		res.status(200).json(posts)
	}, (err) => {
		console.log(err)
		res.status(500).json({ reason: "QUERY_FAILED" })
	})
}

const getCommentList = (req, res) => {
	let postId = req.params.postId

	if (!postId) return res.status(400).json({ reason: "MISSING_PARAMS" })

	let offset = parseInt(req.query.offset, 10) || 0
	let limit = parseInt(req.query.limit, 10) || 20

	db.getCommentList(postId, offset, limit).then((comments) => {
		if (!comments) return res.status(404).json({ reason: "NOT_FOUND" })
		res.status(200).json(comments)
	}, (err) => {
		console.log(err)
		res.status(500).json({ reason: "QUERY_FAILED" })
	})
}

module.exports = {
	createPost: createPost
	, viewPost: viewPost
	, updatePost: updatePost
	, removePost: removePost
	
	, createComment: createComment
	, viewComment: viewComment
	, updateComment: updateComment
	, removeComment: removeComment
	
	, getPostList: getPostList
	, getCommentList: getCommentList
}