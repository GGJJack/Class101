const db = require('../db/db')

const regist = (req, res) => {
	let name = req.body.name
	if (!name) return res.status(400).json({ reason: "MISSING_PARAMS" })
	db.createUser(name).then((user) => {
		res.status(201).json({ success: true, id: user._id })
	}, (err) => {
		console.log(err)
		res.status(500).json({ reason: "QUERY_FAILED" })
	})
}

const getUserInfo = (req, res) => {
	let userId = req.params.userId
	if (!userId) return res.status(400).json({ reason: "MISSING_PARAMS" })
	db.findUser(userId).then((user) => {
		if (!user) return res.status(404).json({ reason: "NOT_FOUND" })
		res.status(200).json(user)
	}, (err) => {
		console.log(err)
		res.status(500).json({ reason: "QUERY_FAILED" })
	})
}

module.exports = {
	regist: regist
	, getUserInfo: getUserInfo
}