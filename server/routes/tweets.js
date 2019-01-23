const tweetsController = require('../controllers/tweetsController')

module.exports = (router) => {
	router.route('/tweets').get(tweetsController.getAll)

}