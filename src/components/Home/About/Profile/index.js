import React, { Component } from 'react';

import {
   firstName,
   lastName,
   title
} from './constants';
import './style.css';

class Profile extends Component {
   render() {
      return (
         <div>
            <h1 className="profile-me">
               {firstName}
               <span className="profile-last-name">
                  {lastName}
               </span>
            </h1>
            <h1 className="profile-title">{title}</h1>
         </div>
      )
   };
}

export default Profile;