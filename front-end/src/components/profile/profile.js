import React, { Component } from "react";
import './profile.css';
import requestAPI from '../../services/api';

class profile extends Component {

  
  constructor(props){
    super(props)
    this.state = {
      test: null
    }
  }


  componentDidMount(){
    this.loadProfile();
  }

  loadProfile(){
    console.log('hiiii')
    requestAPI("api", "profile", "GET")
      .then(response => {
        console.log(response)
      })
  }


  render() {
    return (
    
    <div>
      profile
    </div>
  )}
}

export default profile;
