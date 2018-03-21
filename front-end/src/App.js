import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LinkedInButton from './components/loginButton/LinkedInButton';
import Splash from './components/splash/splash';
import Profile from './components/profile/profile';
import requestAPI from './services/api';
import JWT from './services/jwt';
class App extends Component {
  constructor(props){
    super(props)
    this.auth = new JWT();
    this.state = {
      authorized: null,
    };
  }




  // method called after successfull linkedin authentication 
  loginOrCreate(data){
    console.log(data)
    if(JWT.loggedIn()) {
      this.setState({
        authorized: true
      });
      return;
    } else {
      // removes any expired token from storage
      this.auth.clearToken();
      // sends a request for an access token
      requestAPI("access", "request", "POST", data)
        .then( res => {
          console.log(res)
          // sets access token 
          this.auth.setToken(res.token)
          this.setState({
            authorized: true
          });
        });
    }
  }




  checkForUser(){
    if(!this.auth.loggedIn()){ this.setState({authorized: false})}
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
            <LinkedInButton loginOrCreate={this.loginOrCreate.bind(this)}/>
            <Splash />
          </div>
        )}  

        {/* if profile is already saved in storage show this */}        
        {this.state.authorized && (
          <Profile/>
        )}
      </div>
    );
  }
}

export default App;
