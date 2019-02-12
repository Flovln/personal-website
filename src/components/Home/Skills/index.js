import React, { Component } from 'react';

import {
   title,
   list
} from './constants';
import './style.css';

class Skills extends Component {
   render() {
      return (
         <div className="column skills">
            <h1>{title}</h1>
            <ul>
            {
               list.map(e => <li key={e}>{e}</li>)
            }
            </ul>
         </div>
      )
   };
}

export default Skills;