import React, { Component } from 'react';
import axios from 'axios'

import Tweet from './Tweet'

class TweetContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tweets: []
		}
	}

	componentDidMount = () => {
		axios.get("http://localhost:5000/api/tweets")
			.then(res => {
				this.setState({
					tweets: res.data
				})
				return this.state.tweets
			})
			.catch(err => {
				console.log('Unable to retrieve tweets from api:', err)
			})

	}

	renderTweets = () => {
		const { tweets } = this.state;

		return tweets.map((tweet) => {
			return (
				<Tweet
					key={tweet._id}
					text={tweet.text}
				/>
			)
		})

	}

	render() {
		return (
			<div className="tweetContainer">
				{this.renderTweets()}
				{/* <Tweet className="tweetWrapper" />
				<Tweet className="tweetWrapper" />
				<Tweet className="tweetWrapper" />
				<Tweet className="tweetWrapper" />
				<Tweet className="tweetWrapper" />
				<Tweet className="tweetWrapper" />
				<Tweet className="tweetWrapper" />
				<Tweet className="tweetWrapper" />
				<Tweet className="tweetWrapper" />
				<Tweet className="tweetWrapper" />
				<Tweet className="tweetWrapper" />
				<Tweet className="tweetWrapper" />
				<Tweet className="tweetWrapper" /> */}
			</div>
		);
	}
}

export default TweetContainer;
