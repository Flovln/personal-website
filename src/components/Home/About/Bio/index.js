import React, { Component } from 'react';

import './style.css';
import content from './content';

class Bio extends Component {
   render() {
      return (
         <div className="bio-container">
            <p className="bio-paragraph-first">
               {content.about}
               <br />
               {content.about2}
               <br />
            </p>
            <p className="bio-paragraph-second">
               {content.about3}
            </p>
            <p className="bio-paragraph-third">
               {content.about4}
            </p>
         </div>
      )
   };
}

export default Bio;