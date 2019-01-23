import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="profileBadge">
					<img src={require('../images/profilePic.png')} alt="profile pic" className="profilePic"/>
					<h4>Icon</h4>
				</div>
				<h4 className="headerText">HEADER TEXT</h4>
			</div>
		);
	}
}

export default Header;
