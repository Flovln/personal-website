import React, { Component } from 'react';

import LogoWrapper from './LogoWrapper';
import './style.css';
import content from './content';

class Nav extends Component {
   render() {
      return (
         <div className="socials-container">
            <LogoWrapper
               name={content.github}
               link={content.githublink}
               logo={content.githubLogo}
            />
            <LogoWrapper
               name={content.linkedin}
               link={content.linkedinLink}
               logo={content.linkedinLogo}
            />
         </div>
      )
   };
}

export default Nav;