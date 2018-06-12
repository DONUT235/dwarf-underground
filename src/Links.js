import React, { Component } from 'react';
import CommentLink from './CommentLink.js';
import './Links.css';

class Links extends Component {
	render() {
		return (
			<div className="article-links">
				<CommentLink onclick={this.props.commentClickHandler} />
				<a className="article-link" href="#">
				<i className="fa fa-share"></i>
				<span className="article-link-text">Share Post</span>
				</a>
			</div>
		);
	}
}

export default Links;
