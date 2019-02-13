import React, { Component } from 'react';

import './style.css';
import {
   TITLE,
   SKILLS
} from './constants';

class Skills extends Component {
   render() {
      return (
         <div className="column skills">
            <h1>{TITLE}</h1>
            <ul>
            {
               SKILLS.map(e => <li key={e}>{e}</li>)
            }
            </ul>
         </div>
      )
   };
}

export default Skills;