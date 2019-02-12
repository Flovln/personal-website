import React, { Component } from 'react';

import './style.css';
import content from './content';

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
            <h3>{content.technologies}</h3>
            <ul>
               {
                  technos.map(e => <li key={e}>{ e }</li>)
               }
            </ul>
            <h3>{content.concepts}</h3>
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