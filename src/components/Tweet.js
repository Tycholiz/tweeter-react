import React, { Component } from 'react';
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Tweet extends Component {

	likePost = (id) => {
		axios.post('http://localhost:5000/api/tweets', {
			message: "hey!!"
		})
		.then((res) => {
			console.log(res)
		})
		.catch(err => {
			console.log('Unable to post to api.\n', err)
		})
	}

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
				<div className="tweetWrapper__likeButton" onClick={() => this.likePost(this.props.id)}>
					<FontAwesomeIcon
						icon="heart"
						color= {this.props.liked ? "red" : "lightgrey"}
						size="lg"
					/>
				</div>
			</div>
		);
	}
}

export default Tweet;
