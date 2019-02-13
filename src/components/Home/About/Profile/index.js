import React, { Component } from 'react';

import './style.css';
import {
   FIRST_NAME,
   LAST_NAME,
   TITLE
} from './constants';

class Profile extends Component {
   render() {
      return (
         <div>
            <h1 className="profile-me">
               {FIRST_NAME}
               <span className="profile-last-name">
                  {LAST_NAME}
               </span>
            </h1>
            <h1 className="profile-title">{TITLE}</h1>
         </div>
      )
   };
}

export default Profile;