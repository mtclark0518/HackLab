import React, { Component } from "react";
import './splash.css';
import LinkedInButton from './LinkedInButton';

class Splash extends Component {
  render() {
    return (
    <div>
      <LinkedInButton loginOrCreate={this.props.loginOrCreate}/>
    </div>
    )
  }
}

export default Splash;
