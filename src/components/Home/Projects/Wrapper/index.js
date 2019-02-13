import React, { Component } from 'react';

import './style.css';
import {
   CONCEPTS,
   TECHNOLOGIES
} from './constants';

class Wrapper extends Component {
   render() {
      const {
         concepts,
         description,
         githubLink,
         technos,
         title
      } = this.props;

      return (
         <div className="project-wrapper">
            <h2>
               {
                  githubLink ? (
                     <a
                        href={githubLink}
                        rel="noopener noreferrer"
                        target="_blank"
                     >
                        {title}
                     </a>
                  )
                  : ( title )
               }
            </h2>
            <p>
               {description}
            </p>
            <h3>{TECHNOLOGIES}</h3>
            <ul>
               {
                  technos.map(e => <li key={e}>{ e }</li>)
               }
            </ul>
            <h3>{CONCEPTS}</h3>
            <ul>
               {
                  concepts.map(e => <li key={e}>{e}</li>)
               }
            </ul>            
         </div>
      )
   }
}

export default Wrapper;