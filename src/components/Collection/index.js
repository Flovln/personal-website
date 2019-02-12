import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import RecordsContainer from './RecordsContainer';
import { fetchCollection } from '../../actions'
import './style.css';

class Collection extends Component {
   fetchCollection = () => {
      this.props.fetchCollection();
   }

   componentDidMount() {
      const { collection } = this.props;

      if (!collection.length) {
         this.fetchCollection();
      }
   }

   render() {
      return (
         <div>
            <div className="collection-return">
               <Link to='/'>
                  <p>Back</p>
               </Link>
            </div>
            <div className="collection-title">
               <h1>Records collection.</h1>
            </div>
            <RecordsContainer />
         </div>
      )
   }
}

const mapStateToProps = state => ({
   collection: state.app.collection
});

const mapDispatchToProps = dispatch => ({
   fetchCollection: () => dispatch(fetchCollection())
})

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
