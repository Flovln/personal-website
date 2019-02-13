import React, { Component } from 'react';

import './style.css';
import {
   ABOUT_INTRO,
   ABOUT_PRO,
   ABOUT_HOB,
   ABOUT_MOTO
} from './constants';

class Bio extends Component {
   render() {
      return (
         <div className="bio-container">
            <p className="bio-paragraph-first">
               {ABOUT_INTRO}
               <br />
               {ABOUT_PRO}
               <br />
            </p>
            <p className="bio-paragraph-second">
               {ABOUT_HOB}
            </p>
            <p className="bio-paragraph-third">
               {ABOUT_MOTO}
            </p>
         </div>
      )
   };
}

export default Bio;