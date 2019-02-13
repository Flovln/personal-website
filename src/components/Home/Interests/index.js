import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Favorites from './Favorites';
import MyMixes from './Mixes';
import './style.css';
import {
   TITLE,
   BODY,
   VISIT
} from './constants';

class Interests extends Component {
   render() {
      return (
         <div className="column interests">
            <h1>{TITLE}</h1>
            <p>
               {BODY}
            </p>
            <Link to='/collection' className="collection-link">
               <div className="collection-link-pointer">
                  &#x3e; 
               </div>
               <p>
                  {VISIT}
               </p>
            </Link>
            <MyMixes />
            <Favorites />
         </div>
      )
   };
}

export default Interests;