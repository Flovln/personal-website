import React, { Component } from 'react';
import { connect } from 'react-redux';
import Wrapper from './Wrapper';

import './style.css';

class Container extends Component {
   render() {
      const { collection } = this.props;

      return (
         collection.length ?
            <div className="records-container">
               {
                  collection.map((obj, i) => {
                     return (
                        <Wrapper
                           id={i}
                           image={obj.cover_image}
                           key={i}
                           name={obj.name}
                           title={obj.title}
                        />
                     )
                  })
               }
            </div>
         : <div className="records-placeholder">Loading...</div>
      )
   }
}

const mapStateToProps = state => ({
   collection: state.app.collection
});

export default connect(mapStateToProps)(Container);
