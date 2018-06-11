import React, { Component } from 'react';
import './ClickbaitElement.css';

class ClickbaitElement extends Component {
	render() {
		return (
			<div className="small-6 medium-3 columns other-article">
				<a href="#">
				<img src={this.props.clickbaitImage} alt="mountain" />
				<p>{this.props.clickbaitText}</p>
				</a>	
			</div>
		);
	}
}

export default ClickbaitElement;
