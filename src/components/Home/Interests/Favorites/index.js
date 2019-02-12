import React, { Component } from 'react';

import IFrameWrapper from '../Wrapper';
import './style.css';
import content from './content';

class Favorites extends Component {
   render() {
      return (
         <div>
            <h2>{content.favorites}</h2>
            <div className="favorites-text">
               <p>{content.text}</p>
            </div>
            <IFrameWrapper
               description="I - Silverlining has been active since the 90s, he is one of the finest selector out there. This mix is largely electronic, oscillating between various styles from unknown mid 90s records to more recent ones, it twists and turns between moods and genres but keeps a groove throughout."
               src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/529977864&color=%23e5a655&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
               title="Silverlining"
            />
            <br/>
            <IFrameWrapper
               description="II - Van Anh is a prominent figure of the Dutch techno scene. This mix carries a lot of dub grooves and atmospheric vibes which creates a thrilling techno journey. Be prepared to load for a mind trip."
               src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/499227549&color=%23e5a655&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
               title="Van Anh"
            />
         </div>
      )
   };
}

export default Favorites;