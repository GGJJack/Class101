const { buildSchema } = require('graphql')
const db = require('../db/db')

const schema = buildSchema(`
	type User {
		id: String!
		name: String
		joinDay: String
	}
	type Post {
		id: String!
		title: String
		content: String
		userId: String
		created: String
	}
	type Comment {
		id: String!
		postId: String!
		userId: String!
		content: String
		created: String
	}
	type Query {
		user(id: String!): User
		userPost(userId: String!): [Post]
		userComment(userId: String!): [Comment]

		post(id: String!): Post
		posts(offset: Int, limit: Int): [Post]

		comment(id: String!): Comment
		comments(postId: String!, offset: Int, limit: Int): [Comment]
	}
	type Mutation {
		createUser(name: String!): User

		createPost(title: String!, content: String!, userId: String!): Post
		updatePost(id: String!, title: String, content: String): Post
		deletePost(id: String!): Post

		createComment(content: String!, userId: String!, postId: String!): Comment
		updateComment(id: String!, content: String): Comment
		deleteComment(id: String!): Comment
	}
`)

const resolver = {
	user: (args, context, info) => {
		let userId = args.id;
		return db.findUser(userId)
	}
	, userPost: (args, context, info) => {
		let userId = args.userId;
		return db.getUserPostList(userId)
	}
	, userComment: (args, context, info) => {
		let userId = args.userId;
		return db.getUserCommentList(userId)
	}
	, post: (args, context, info) => {
		let postId = args.id
		return db.viewPost(postId)
	}
	, posts: (args, context, info) => {
		let offset = args.offset || 0
		let limit = args.limit || 20
		return db.getPostList(offset, limit)
	}
	, comment: (args, context, info) => {
		let commentId = args.id
		return db.viewComment(commentId)
	}
	, comments: (args, context, info) => {
		let postId = args.postId
		let offset = args.offset || 0
		let limit = args.limit || 20
		return db.getCommentList(postId, offset, limit)
	}
	, createUser: (args, context, info) => {
		let name = args.name
		return db.createUser(name)
	}
	, createPost: (args, context, info) => {
		let title = args.title
		let content = args.content
		let userId = args.userId
		return db.createPost(title, content, userId)
	}
	, updatePost: (args, context, info) => {
		let postId = args.id
		let updateInfo = {}
		if (args.title) updateInfo.title = args.title
		if (args.content) updateInfo.content = args.content
		return db.updatePost(postId, updateInfo)
	}
	, deletePost: (args, context, info) => {
		let postId = args.id
		return db.removePost(postId)
	}
	, createComment: (args, context, info) => {
		let userId = args.userId
		let postId = args.postId
		let content = args.content
		return db.createComment(userId, postId, content)
	}
	, updateComment: (args, context, info) => {
		let commentId = args.id
		let content = args.content
		return db.updateComment(commentId, content)
	}
	, deleteComment: (args, context, info) => {
		let commentId = args.id
		return db.removeComment(commentId)
	}
}

module.exports = { schema: schema, rootValue: resolver }