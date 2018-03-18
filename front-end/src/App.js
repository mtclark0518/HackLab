import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import Splash from './components/splash/splash';

class App extends Component {
  render() {

    return (
      <div className="App">
       
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        
        <LoginButton />
        <Splash />
      </div>
    );
  }
}

export default App;
