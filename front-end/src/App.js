import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LINKED_IN_VARIABLES  from './environment/env';
import LoginButton from './components/LoginButton';

class App extends Component {
  render() {
    const test = 'heeeeeeeeeeee'
    console.log(LINKED_IN_VARIABLES);

    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <script type="in/Login"></script>
      </div>
    );
  }
}

export default App;
