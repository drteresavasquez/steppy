import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Home'

class App extends Component {

  render() {
    return (
      <div>
          <Route exact path='/' component={Home} />
      </div>
    );
  }
}


export default App;
