import React, { Component } from 'react';

import Tweet from './Tweet'

class TweetContainer extends Component {
	render() {
		return (
			<div className="tweetContainer">
				<Tweet className="tweetWrapper" />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
			</div>
		);
	}
}

export default TweetContainer;
