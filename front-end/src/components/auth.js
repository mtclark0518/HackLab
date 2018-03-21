// import React, { Component } from 'react';
// import LoginButton from './components/loginButton/LoginButton';
// import requestAPI from '../services/api';
// import JWT from '../services/jwt';
// class Auth extends Component {
//   constructor(props){
//     super(props)
//     this.token = new JWT();
//     this.state = {
//       authorized: null,
//     };
//   }

//   // method called after successfull linkedin authentication 
//   loginOrCreate(data){
//     if(this.token.loggedIn()) {
//       this.setState({
//         authorized: true
//       });
//       return;
//     } else {
//       // removes expired token from storage
//       this.token.clearToken();
//       // sends a request for a user profile
//       // if first login this will create an initial profile 
//       requestAPI("profile", "POST", data)
//         .then( res => {
//           // sets account to app state and passes to profile as a prop 'profile'
//           this.token.setToken(res.user.token)
//           this.setState({
//             authorized: true
//           });
//         });
//     }
//   }

//   render() {
    
//     return (
//       <div className="Auth">
        
//         {/* if there isn't a user already show this */}
//         {!this.state.authorized && (
//           <div>
//             {/* passes the loginOrCreate method to the LoginButton */}
//             <LoginButton loginOrCreate={this.loginOrCreate.bind(this)}/>
//             <Splash />
//           </div>
//         )}  

//         {/* if profile is already saved in storage show this */}        
//         {this.state.authorized && (
//           <Profile/>
//         )}
//       </div>
//     );
//   }
// }

// export default Auth;
