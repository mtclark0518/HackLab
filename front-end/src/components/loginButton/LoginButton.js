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
  
    render() {
      return (
        <div>
          <script type="IN/Login">
            <script>
              function onLinkedInLoad() {
                window.IN.Event.on(window.IN, "auth", () => {
                    window.IN.API.Raw("/people/~")
                        .result(data => {
                            console.log(data)
                        })
                        .error(error => {
                            console.log(error)
                        })
                })
              }
            </script>
          </script>
        </div>
      )
    }
}

export default LoginButton;