import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Favorites from './Favorites';
import MyMixes from './Mixes';
import './style.css';
import content from './content';

class Interests extends Component {
   render() {
      return (
         <div className="column interests">
            <h1>{content.title}</h1>
            <p>
               {content.body}
            </p>
            <Link to='/collection' className="collection-link">
               <p>
                  &#x3e; {content.visit}
               </p>
            </Link>
            <MyMixes />
            <Favorites />
         </div>
      )
   };
}

export default Interests;