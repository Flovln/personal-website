import React, { Component } from 'react';

import './style.css';

class LogoWrapper extends Component {   
   render() {
      const {
         name,
         link,
         logo
      } = this.props;

      return (
         <div className="social-logo">
            <a
               href={link}
               rel="noopener noreferrer"
               target="_blank"
            >
               <img
                  alt={name}
                  className="social-logo-img"
                  src={logo}
               />
            </a>
         </div>
      )
   }
}

export default LogoWrapper;