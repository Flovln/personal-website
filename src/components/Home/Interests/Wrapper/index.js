import React, { Component } from 'react';

import './style.css';

class IFrameWrapper extends Component {
   render() {
      const {
         description,
         title,
         src
      } = this.props;

      return (
         <div>
            <p>{description}</p>
            <iframe
               allow="autoplay"
               className="iframe-element"
               frameBorder="no"
               src={src}
               scrolling="no"
               title={title}
            >
            </iframe>
         </div>
      )
   }
}

export default IFrameWrapper;