import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from './components/splash/splash';
import Profile from './components/profile/profile';
import Navigation from './components/navigation/navigation';
import requestAPI from './services/api';
import JWT from './services/jwt';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authorized: null,
            navigation: null
        };
    }

    // lifecycle method called on app load
    componentDidMount(){

        JWT.loggedIn() ? 
            this.setState({ authorized: true, navigation: 3 }) : 
            this.setState( { authorized: false } );
    }

    checkAuth(){

    }
    navigationUpdate(update){
        this.setState({
            navigation: update
        });
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
                
                {/* if there isn't a user logged in already show this */}
                {!this.state.authorized && (
                    <Splash loginOrCreate={this.loginOrCreate.bind(this)}/>
                )}  

                {/* if user is authorized show this */}        
                {this.state.authorized && (
                    <div>
                        {this.state.navigation === 1 && (
                            <div>1</div>
                        )}
                        {this.state.navigation === 2 && (
                            <div>stop clickin around and build something ya deeeeeeuuussche</div>
                        )}
                        {this.state.navigation === 3 && (
                            <Profile />
                        )}
                        {this.state.navigation === 4 && (
                            <div>----------------------------------</div>
                        )}
                        {this.state.navigation === 5 && (
                            <div>0---0---0--0--0</div>
                        )}
                        <Navigation navigationUpdate={this.navigationUpdate.bind(this)} />
                    </div>
                )}
            </div>
        );
    }

}

export default App;
