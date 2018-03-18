import React, {Component} from 'react';
import requestAPI from '../../api';

class LoginButton extends Component {
  constructor(props){
    super(props)
    // this.createProfile = this.createProfile.bind(this)
    this.onLinkedInLoad = this.onLinkedInLoad.bind(this)
  }

  createProfile(data) {
    //how to get the data from the LinkedIn to return
    
    requestAPI("profile/create", "POST", data)
      .then(res => {
        console.log(res);
      })
  }
  /*
    const data =  {
      firstName: "Courtney",
      lastName: "Fay",
      headline: "Front-End Web Developer",
      linkedInId: "THI5I54T3ST"
    };
    this.createProfile(data)
  */
  getProfileData() {
    IN.API.Raw("/people/~").result(onSuccess).error(onError)
  }

  onLinkedInLoad() {
    IN.Event.on(IN, "auth", this.getProfileData)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentWillMount() {
    this.onLinkedInLoad()
  } 
  /*
    <script type="text/javascript">
      // Setup an event listener to make an API call once auth is complete
      function onLinkedInLoad() {
        IN.Event.on(IN, "auth", getProfileData);
      }
      // Handle the successful return from the API call
      function onSuccess(data) {
        console.log(data);
      }
      // Handle an error response from the API call
      function onError(error) {
        console.log(error);
      }
      // Use the API call wrapper to request the member's basic profile data
      function getProfileData() {
        IN.API.Raw("/people/~").result(onSuccess).error(onError);
      }
    </script>
  */

  render() {
    return (
      <script type="in/Login"></script>
    )
  }
}

export default LoginButton;