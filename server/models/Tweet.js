const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema({
	text: String,
})

module.exports = mongoose.model('Tweet', TweetSchema)