import React, { Component } from 'react';
import ClickbaitDiv from './ClickbaitDiv.js'
import './App.css';
import Links from './Links.js';
import Article from './Article.js';
import Advertisement from './Ad.js';
import Header from './Header.js';

class App extends Component {
	render() {
		return (
			<div>
				<Header />	

				<main className="expanded row">
					<Article />
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
	
}

export default App;
