import React, { Component } from 'react';

import IFrameWrapper from '../Wrapper';
import {
   MY_MIXES,
   DESCRIPTION
} from './constants';
import './style.css';

class MyMixes extends Component {
   render() {
      return (
         <div className="my-mixes">
            <h2>{MY_MIXES}</h2>
            <IFrameWrapper
               description={DESCRIPTION}
               src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/199554228&color=%23e5a655&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
               title="goutez-electronique"
            />
         </div>
      )
   };
}

export default MyMixes;