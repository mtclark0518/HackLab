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
    window.IN.API.Raw("/people/~")
      .result(this.onSuccess)
      .error(this.onError)
  }

  onSuccess(data) {
    console.log(data)
  }

  onError(error) {
    console.log(error)
  }

  onLinkedInLoad() {
    // e.preventDefault();
    //console.log("hit the linkedin button");

    window.IN.Event.on(window.IN, "auth", this.getProfileData);
  }

  componentDidMount() {
    // this.onLinkedInLoad()
  } 
  /*
    <script type="text/javascript">
      // Setup an event listener to make an API call once auth is complete
      function onLinkedInLoad() {
        
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
        <script type="IN/Login"></script>
      )
    }
}

export default LoginButton;