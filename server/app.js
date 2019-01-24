/** require dependencies */
const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

// const Tweet = require('./models/Tweet')

const router = express.Router()
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/tweeter"

/** set up middleware */
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(url, { useNewUrlParser: true })
	.then(
		() => { console.log('Database is connected') },
		err => { console.log('Cannot connect to database:', err) }
	)

let port = process.env.PORT || 5000

// middleware to use for all requests
router.use(function (req, res, next) {
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:5000/api)
router.get('/', function (req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});

/** set up routes {API Endpoints} */
routes(router)

//REGISTERING ROUTES. The structure for using the Express Router let's us pull in an instance of the router. We can then define routes and then apply those routes to a root URL (in this case, API).
app.use('/api', router)

app.listen(port, () => {
	console.log(`Server started at port: ${port}`);
});
