import React, { Component } from 'react';

import IFrameWrapper from '../Wrapper';
import './style.css';
import {
   FAVORITES,
   FAVORITES_INTRO,
   FAVORITE_1_NAME,
   FAVORITE_1_DESC,
   FAVORITE_1_LINK,
   FAVORITE_2_NAME,
   FAVORITE_2_DESC,
   FAVORITE_2_LINK
} from './constants';

class Favorites extends Component {
   render() {
      return (
         <div>
            <h2>{FAVORITES}</h2>
            <div className="favorites-text">
               <p>{FAVORITES_INTRO}</p>
            </div>
            <IFrameWrapper
               description={FAVORITE_1_DESC}
               src={FAVORITE_1_LINK}
               title={FAVORITE_1_NAME}
            />
            <br/>
            <IFrameWrapper
               description={FAVORITE_2_DESC}
               src={FAVORITE_2_LINK}
               title={FAVORITE_2_NAME}
            />
         </div>
      )
   };
}

export default Favorites;