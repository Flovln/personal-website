import React, { Component } from 'react';

import './style.css';

class Wrapper extends Component {
   render() {
      const {
         id,
         image,
         name
         // title
      } = this.props;

      return (
         <div className="record-wrapper" key={id}>
            <img
               alt={name}
               className="record-cover"
               src={image}
            />
            {/* <p>{name} - {title}</p> */}
         </div>
      )
   }
}

export default Wrapper;