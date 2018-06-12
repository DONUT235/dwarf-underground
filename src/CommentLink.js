import React, {Component} from 'react';

class CommentLink extends Component {
	render() {
		return (
			<div className="article-link" onClick={this.props.onclick}>
			<i className="fa fa-comments-o"></i>
			<span className="article-link-text">Comments</span>
			</div>
		);
	}
}

export default CommentLink;
