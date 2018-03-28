import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LinkedInButton from './components/loginButton/LinkedInButton';
import Splash from './components/splash/splash';
import Profile from './components/profile/profile';
import requestAPI from './services/api';
import JWT from './services/jwt';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authorized: null,
        };
    }

    // lifecycle method called on app load
    componentDidMount(){
        console.log('test')
        JWT.loggedIn() ? 
            this.setState({ authorized: true }) : 
            this.setState( { authorized: false } );
    }

    // method called after successfull linkedin authentication 
    loginOrCreate(data){
        // removes any expired token from storage
        JWT.clearToken();
        // sends a request for an access token
        requestAPI("access", "request", "POST", data)
        .then( res => {
            // sets access token 
            JWT.setToken(res.token)
            this.setState({
                authorized: true
            });
        });
    }


    render() {
        
        return (
            <div className="App">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Como se Taco Fart?</h1>
                
                {/* if there isn't a user logged in already show this */}
                {!this.state.authorized && (
                    <div>
                        {/* passes the loginOrCreate method to the LoginButton */}
                        <LinkedInButton loginOrCreate={this.loginOrCreate.bind(this)}/>
                        <Splash />
                    </div>
                )}  

                {/* if user is authorized show this */}        
                {this.state.authorized && (
                    <Profile/>
                )}
            </div>
        );
    }
}

export default App;
