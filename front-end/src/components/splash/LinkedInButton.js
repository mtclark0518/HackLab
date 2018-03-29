import React, {Component} from 'react';

class LinkedInButton extends Component {

    componentDidMount(){
        this.onLinkedInLoad();
    }

    // sets the auth event listener
    onLinkedInLoad() {
        window.IN.Event.on(window.IN, "auth", this.getProfileData.bind(this)); 
    }

    // after a sucesseful linkedInLogin
	onLinkedIn(data){
        this.props.loginOrCreate(data);
    }

    onError(error){
        console.log(error);
    }

    // requests profile information from linkedIn
    getProfileData(){
        window.IN.API.Raw("/people/~:(id,first-name,last-name,email-address,headline,industry,location,summary,picture-url::(original),public-profile-url)")
        .result( data => {this.onLinkedIn(data); })
        .error(this.onError);
    }

    render() {
      return (
          <script type="IN/Login"></script>
      )
    }
}

export default LinkedInButton;