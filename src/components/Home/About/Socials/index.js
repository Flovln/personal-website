import React, { Component } from 'react';

import LogoWrapper from './LogoWrapper';
import './style.css';
import {
   GITHUB,
   GITHUB_LINK,
   GITHUB_LOGO,
   LINKEDIN,
   LINKEDIN_LINK,
   LINKEDIN_LOGO
} from './constants';

class Nav extends Component {
   render() {
      return (
         <div className="socials-container">
            <LogoWrapper
               name={GITHUB}
               link={GITHUB_LINK}
               logo={GITHUB_LOGO}
            />
            <LogoWrapper
               name={LINKEDIN}
               link={LINKEDIN_LINK}
               logo={LINKEDIN_LOGO}
            />
         </div>
      )
   };
}

export default Nav;