import React, { Component } from 'react';

import Profile from './Profile';
import Socials from './Socials';
import Bio from './Bio';

import './style.css';

class About extends Component {
   render() {
      return (
         <div className="about-container">
            <Profile />
            <Socials />
            <Bio />
         </div>
      )
   };
}

export default About;