import React, { Component } from "react";
import './profile.css';
import requestAPI from '../../services/api';

class profile extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.loadProfile();
  }

  loadProfile(){
    requestAPI("api", "profile", "GET")
      .then(response => {
        console.log(response)
        this.setState({user: response});
      });
  }

  render() {
    const quickNsimple = {
      width: "150px", 
      border:"1px solid black", 
      boxShadow:"0 0 10px 2px black", 
      borderRadius:"12%"
    }
    return (
      <div>
        <img style={quickNsimple} src={this.state.user.pictureUrl}/>
        <h2>Hi {this.state.user.firstName}</h2>
      </div>
  )}
}

export default profile;
