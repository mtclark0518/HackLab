import React, {Component} from 'react';
import requestAPI from '../../api';

class LoginButton extends Component {
  constructor(props){
    super(props)
    this.createProfile = this.createProfile.bind(this)
  }

  createProfile(data) {
    //how to get the data from the LinkedIn to return
    
    requestAPI("profile/create", "POST", data)
      .then(res => {
        console.log(res);
      })
  }

  componentWillMount() {
    const data =  {
      firstName: "Courtney",
      lastName: "Fay",
      headline: "Front-End Web Developer",
      linkedInId: "THI5I54T3ST"
    };
    this.createProfile(data)
  } 

  render() {
    return (
      <script type="in/Login"></script>
    )
  }
}

export default LoginButton;