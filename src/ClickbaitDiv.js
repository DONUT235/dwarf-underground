import React, { Component } from 'react';
import ClickbaitElement from './ClickbaitElement.js';
import './ClickbaitDiv.css';

class ClickbaitDiv extends Component {
	render() {
		return (
			<div className="small-12 columns other-articles">
				<h2>From around the Realm</h2>
				{this.props.clickbaitArray.map((obj, index) => (
					<ClickbaitElement
						clickbaitText={obj.clickbaitText}
						clickbaitImage={obj.clickbaitImage}
						key={index}
					/>
				))}
			</div>
		);
	}
}

export default ClickbaitDiv;
