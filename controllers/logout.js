const jwt = require('jsonwebtoken');
const redis = require('redis');

const redisClient = redis.createClient(process.env.REDIS_URI);

handleLogout = (db) => (req, res) => {
	const { authorization } = req.headers;

	return Promise.resolve(redisClient.del(authorization))
		.then(() => {
			return res.json({ success: 'true' })
		})
		.catch((err) => res.json(err))
}

module.exports = {
	handleLogout: handleLogout
}