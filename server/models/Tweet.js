const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema({
	text: String,
	liked: Boolean,
})

module.exports = mongoose.model('Tweet', TweetSchema)