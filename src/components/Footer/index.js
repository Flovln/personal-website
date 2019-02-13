import React, { Component } from 'react';

import './style.css';
import {
   PROPERTIES
} from './constants';

class Footer extends Component {
   render() {
      return (
         <footer className="footer">
            {PROPERTIES}
         </footer>
      )
   }
}

export default Footer;