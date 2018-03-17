import React, {Component} from 'react';
import LINKED_IN_VARIABLES from '../environment/env';

class LoginButton extends Component {




    render() {

    const baseURI = "https://www.linkedin.com/oauth/v2/authorization?";
        
    const authurl = `${baseURI}response_type=code&client_id=${LINKED_IN_VARIABLES.CLIENT_ID}&redirect_uri=${LINKED_IN_VARIABLES.REDIRECT_URI}&state=THISISASTATESTRING&scope=r_basicprofile`;
    console.log(authurl)    
    return (
            <div className="App">
                <a href={authurl}><img src="signin.png" alt="Sign in with Linkedin"/></a>
                
            </div>
        );
    }
}


export default LoginButton;