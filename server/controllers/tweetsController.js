const Tweet = require('../models/Tweet')

module.exports = {
	getAll: (req, res, next) => {
		Tweet.find({})
			.then(tweet => {
				res.send(tweet)
			})
			.catch(err => {
				res.status(400).send("unable to retrieve tweets from db")
				console.info("unable to retrieve tweets from db", err)
			})
	}
}