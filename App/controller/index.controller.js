
const status = (req, res) => {
	res.status(200).json({ status: "ok" })
}

module.exports = {
	status: status
}