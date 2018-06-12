import React, {Component} from 'react';

class CommentSection extends Component {
	constructor(props) {
		super(props);
		this.state = {active: false};
	}
	render() {
		if(this.props.display) {
			return <textarea></textarea>;
		} else {
			return null;
		}
	}
}

export default CommentSection;
