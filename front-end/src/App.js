import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginButton from './components/loginButton/LoginButton';
import Splash from './components/splash/splash';
import Profile from './components/profile/profile';
import requestAPI from './services/api';
import JWT from './services/jwt';
class App extends Component {
  constructor(props){
    super(props)
    this.token = new JWT();
    this.state = {
      authorized: null,
      account: {},

    };
  }
  // method called after successfull linkedin authentication 
  loginOrCreate(data){
      // sends a request for a user profile
      // if first login this will create an initial profile 
      requestAPI("profile", "POST", data)
        .then(res => {
          // sets account to app state and passes to profile as a prop 'profile'
          this.setState({
            account: res
          })
          this.handleAccount();
        });
  }

  // confirms authorized user and updates state to display profile component
  handleAccount(){
    console.log(this.token.getProfile());
    if(window.IN.User.isAuthorized()){
      this.setState({
        authorized: true
      })
    } else {
      this.setState({
        authorized: false
      })
    }
  }

  render() {
    
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Como se Taco Fart?</h1>
        
        {/* if there isn't a user already show this */}
        {!this.state.authorized && (
          <div>
            {/* passes the loginOrCreate method to the LoginButton */}
            <LoginButton loginOrCreate={this.loginOrCreate.bind(this)}/>
            <Splash />
          </div>
        )}  

        {/* if an account is already saved in storage show this */}        
        {this.state.authorized && (
          <Profile profile={this.state.account}/>
        )}
      </div>
    );
  }
}

export default App;
