import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

import Header from './components/Header';
import Home from './components/Home';
import Collection from './components/Collection';
import Footer from './components/Footer';

import './style.css';

class App extends Component {
   render() {
      return (
         <div className="app">
            <Header />
            <Switch>
               <Route component={ Home } exact path='/'/>
               <Route component={ Collection } exact path='/collection'/>
            </Switch>
            <Footer />
         </div>
      );
   }
}

export default withRouter(App);
