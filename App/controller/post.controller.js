const db = require('../db/db')

const createPost = (req, res) => {
	let title = req.body.title
	let content = req.body.content
	let writer = req.body.writer

	if (!title || !content || !writer) return res.status(400).json({ reason: "MISSING_PARAMS" })

	db.createPost(title, content, writer).then((post) => {
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

module.exports = {
	createPost: createPost
	, viewPost: viewPost
	, updatePost: updatePost
	, removePost: removePost
}