import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginButton from './components/loginButton/LoginButton';
import Splash from './components/splash/splash';
>>>>>>> 5349290888a8cbe7b3a42c53232b79ef14a973f1

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
