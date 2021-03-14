import React, { Component } from 'react';
import Navigation from './Navigation';
import Main from './Main'
import logo from './resource/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Navigation</h2>
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;