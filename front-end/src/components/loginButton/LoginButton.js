import React, {Component} from 'react';

class LoginButton extends Component {

	// after a sucesseful linkedInLogin
	onLinkedIn(data){
		this.props.loginOrCreate(data)
	}

    render() {
      return (
          <script type="IN/Login">
            <script>
              function onLinkedInLoad() {
                window.IN.Event.on(window.IN, "auth", () => {
                    window.IN.API.Raw("/people/~:(id,first-name,last-name,headline,industry,location,summary,picture-url::(original),public-profile-url)")
                        .result(data => {
                            this.onLinkedIn(data);
                        })
                        .error(error => {
                            console.log(error)
                        })
                })
              }
            </script>
          </script>
      )
    }
}

export default LoginButton;