import React, { Component } from 'react';
import ClickbaitDiv from './ClickbaitDiv.js'
import './App.css';
import Links from './Links.js';
import CommentSection from './CommentSection.js';
import Advertisement from './Ad.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {showComments: false};
	}
	render() {
		return (
			<div>
				<div className="expanded row header">
					<div className="clearfix">
						<div className="float-left logo">
							<img src="http://www.iconninja.com/files/409/4/1006/axe-icon.svg" alt="axe" />
						</div>
						<div className="float-right nav-links">
							<a href="#">Home</a>
							<a href="#">About</a>
							<a href="#">Log in</a>
						</div>
					</div>
					<div className="headline text-center small-12 columns">
						<h1>The Dwarf Underground</h1>
						<h3>Delving deep for the <span className="gold">shiniest</span> news</h3>
					</div>
				</div>

				<main className="expanded row">
					<div className="large-8 medium-12 columns article">
						<h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
						<div className="avatar">
							<img src="http://www.zbrushcentral.com/attachment.php?attachmentid=376082" alt="author" />
							<div className="author-info">
								<p className="author-name">By Domri, son of Flug</p>
								<p className="date">on 28 April, 3018 of the Third Age</p>
							</div>
						</div>
						<section className="article-body">
							<p><span className="article-start gold">E</span>psum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.</p>

							<p>Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum.</p>

							<p>Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium. Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Gratuitous octopus niacin, sodium glutimate.</p>

							<p className="interject">Avast! A stray goblin!</p>

							<p>Quote meon an estimate et non interruptus stadium. Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito.</p>

							<p>Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.</p>

							<p>Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum.</p>
						</section>
						<Links commentClickHandler={ev => this.revealComments(ev)} />
						{/*<div className="article-links">
							<CommentLink onclick={ev => this.revealComments(ev)} />
							<a className="article-link" href="#">
							<i className="fa fa-share"></i>
							<span className="article-link-text">Share Post</span>
							</a>
						</div>*/}
						<CommentSection display={this.state.showComments} />
					</div>
					<Advertisement />
					<ClickbaitDiv 
						clickbaitArray={[
							{clickbaitImage:"https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif", clickbaitText:"Single Orcs in Indianapolis"},
							{clickbaitImage:"https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg", clickbaitText:"You won't believe what's under this mountain"},
							{clickbaitImage:"http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg", clickbaitText:"Mine 20% more gold with One Weird Trick"},
							{clickbaitImage:"http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg", clickbaitText:"Surprise for Indiana Hobbits born before 1999"} 
						]}
					/>
				</main>

				<footer className="expanded row">
					<h6>&copy; 2017 Erebor Industries</h6>
					<h6 className="float-right">All rights reserved</h6>
				</footer>
			</div>
		);
	}
	revealComments = ev => {
		ev.preventDefault();
		this.setState({showComments: !this.state.showComments});
	}
}

export default App;
