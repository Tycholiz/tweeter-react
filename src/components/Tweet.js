import React, { Component } from 'react';

class Tweet extends Component {
	render() {
		return (
			<div className="tweetWrapper">
				<div className="tweetWrapper__media">
					<img src={require('../images/profilePic.png')} alt="profile pic" className="profilePic" />
					<h4>Icon</h4>
				</div>
				<div classNmae="tweetWrapper__text">
					<p>Tweet of the day... Everyone wins!!</p>
				</div>
				<div className="tweetWrapper__likeButton">
					<p>	&#9829;</p>
				</div>
			</div>
		);
	}
}

export default Tweet;
