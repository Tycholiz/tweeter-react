import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Tweet extends Component {
	render() {
		return (
			<div className="tweetWrapper">
				<div className="tweetWrapper__media">
					<img src={require('../images/profilePic.png')} alt="profile pic" className="profilePic" />
					<h4>Profile Icon</h4>
				</div>
				<div className="tweetWrapper__text">
					<p>{this.props.text}</p>
				</div>
				<div className="tweetWrapper__likeButton">
					<FontAwesomeIcon
						icon="heart"
						color="lightgrey"
						size="lg"
					/>
				</div>
			</div>
		);
	}
}

export default Tweet;
