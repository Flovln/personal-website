import React, { Component } from 'react';

import './style.css';

import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Interests from './Interests';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<About />
				<div className="home-container">
					<Skills />
					<Projects />
					<Interests />
				</div>
			</div>
		);
	}
}
      
export default Home;