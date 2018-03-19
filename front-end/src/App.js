import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginButton from './components/loginButton/LoginButton';
import Splash from './components/splash/splash';
import Profile from './components/profile/profile';
import requestAPI from './api';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      account: null
    };
  }

  // called when the component...in this case the app...loads
  componentDidMount(){
    this.checkForAccount();
  }
  
  // checks local storage to see if we already have an account set
  checkForAccount(){
    const found = window.localStorage.getItem('account');
    console.log(found);
    if(found){
      this.setState({
        account: found
      });
    }
  }

  // method called after successfull linkedin authentication 
  loginOrCreate(data){
      // sets account in storage for future login
      window.localStorage.setItem('account', data.id)
      // sends a request for a user profile
      // if first login this will create an initial profile 
      requestAPI("profile", "POST", data)
        .then(res => {
          // logs the user details
          console.log(res);
          
          // updates state after receiving profile details to render profile
          this.checkForAccount();
        });
  }

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Como se Taco Fart?</h1>
        
        {/* if there isn't a user already saved show this */}
        {!this.state.account && (
          <div>
            {/* passes the loginOrCreate method to the LoginButton */}
            <LoginButton loginOrCreate={this.loginOrCreate.bind(this)}/>
            <Splash />
          </div>
        )}  

        {/* if an account is already saved in storage show this */}        
        {this.state.account && (
          <Profile />
        )}
      </div>
    );
  }
}

export default App;
