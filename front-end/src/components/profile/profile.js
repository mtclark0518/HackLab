import React, { Component } from "react";
import './profile.css';
import requestAPI from '../../services/api';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        //  HAS THE FOLLOWING PROPERTIES
        //  firstName   //  lastName    //  headline
        //  industry    //  pictureUrl  //  gaCohort
        //  summary     //  interestCategories<Array>
      }
    };
  }

  componentDidMount() {
    this.loadProfile();
  }

  // Loads GA HackLab profile
  loadProfile(){
    requestAPI("api", "profile", "GET")
      .then(response => {
        this.setState({ 
          user: response    // contains fistName, lastName, headline, industry, 
        });
      });
  }

  render() {
    // just a reference in case we want to do any custom styling
    const quickNsimple = {
      width: "150px", 
      border:"1px solid black", 
      boxShadow:"0 0 10px 2px black", 
      borderRadius:"12%"
    };
    //need to add location
    return (
      <div>
        <img style={quickNsimple} src={this.state.user.pictureUrl} alt="linkedin profile"/>
        <h2>Hi {this.state.user.firstName} {this.state.user.lastName}</h2>
        <p>Bio: {this.state.user.headline}</p>
        <p>Industry: {this.state.user.industry}</p>
        <p>Interest Categories: {this.state.user.interestCategories}</p>
        <p>Bootcamp Cohort: {this.state.user.gaCohort}</p>
        <p>Skills: {this.state.user.summary}</p>
      </div>
  )}
}

export default Profile;
