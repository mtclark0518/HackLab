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
        //  industry    //  pictureUrl  //  bootcampCohort
        //  summary     //  interestCategories //location<Array>
      },
      editing: false
    };
    this.updateProfile = this.updateProfile.bind(this);
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

  // Switch over to editing profile, change all values to input boxes
  editProfile(){
    this.setState({
      editing: true
    });
  }

  updateProfile(event){
    const value = event.currentTarget.value;
    const name = event.target.name;
    const userCopy = JSON.parse(JSON.stringify(this.state.user));

    userCopy[name] = value;

    this.setState({ 
      user: userCopy
    });
  }

  saveProfile(event){
    event.preventDefault();
    const updatedProfile = this.state.user;

    requestAPI("api", "profile", "PUT", updatedProfile)
    .then(response => {
      console.log(response);
      this.setState({
        user: response,
        editing: false
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

    return (
      <div>
        {!this.state.editing && (
          <div>
            <img style={quickNsimple} src={this.state.user.pictureUrl} alt="linkedin profile"/>
            <h2>Hi {this.state.user.firstName} {this.state.user.lastName}</h2>
            <button onClick={this.editProfile.bind(this)}>edit</button>
            <p>Bio: {this.state.user.headline}</p>
            <p>Industry: {this.state.user.industry}</p>
            <p>Interest Categories: {this.state.user.interestCategories}</p>
            <p>Bootcamp Cohort: {this.state.user.bootcampCohort}</p>
            <p>Location: {this.state.user.location}</p>
            <p>Skills: {this.state.user.summary}</p>
          </div>
        )}

        {this.state.editing && (
          <div>
            <img style={quickNsimple} src={this.state.user.pictureUrl} alt="linkedin profile"/>
            <form onSubmit={this.saveProfile.bind(this)}>
              <label>
                First Name: 
                <input name="firstName" value={this.state.user.firstName || ''} onChange={this.updateProfile} />
              </label>
              <label>
                Last Name: 
                <input name="lastName" value={this.state.user.lastName || ''} onChange={this.updateProfile} />
              </label>
              <label>
                Bio:
                <input name="summary" value={this.state.user.headline || ''} onChange={this.updateProfile} /> 
              </label>
              <label>
                Industry: 
                <input name="industry" value={this.state.user.industry || ''} onChange={this.updateProfile} />
              </label>
              <label>
                Interest Categories:
                <input name="interestCategories" value={this.state.user.interestCategories || ''} onChange={this.updateProfile} /> 
              </label>
              <label>
                Bootcamp Cohort: 
                <input name="bootcampCohort" value={this.state.user.bootcampCohort || ''} onChange={this.updateProfile} />
              </label>
              <label>
                Location: 
                <input name="location" value={this.state.user.location || ''} onChange={this.updateProfile} />
              </label>
              <label>
                Skills:
                <input name="summary" value={this.state.user.summary || ''} onChange={this.updateProfile} /> 
              </label>
              <input type="submit" value="Save" />
            </form>
          </div>
        )}
      </div> 
      
  )}
}

export default Profile;
