import React, { Component } from "react";
import './navigation.css';

class Navigation extends Component {
  navigationUpdate(update){
    this.props.navigationUpdate(update);
  }
  render() {
    // just here for easy editing
    const tempNavStyle = {
      position: 'fixed',
      bottom: '0',
      width: '100%',
      height: '10vh',
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-evenly'
    };
    const tempIconStyle = {
      display:'flex',
      flexGrow:'2',
      justifyContent:'center'
    }
    return (
    // we can change the values to strings if we want to later on and stick icons inside the buttons
    <div style={tempNavStyle}>
     <button style={tempIconStyle} onClick={e => this.navigationUpdate(1)}>1</button>
     <button style={tempIconStyle} onClick={e => this.navigationUpdate(2)}>2</button>
     <button style={tempIconStyle} onClick={e => this.navigationUpdate(3)}>3</button>
     <button style={tempIconStyle} onClick={e => this.navigationUpdate(4)}>4</button>
     <button style={tempIconStyle} onClick={e => this.navigationUpdate(5)}>5</button>
    </div>
  )
  }
}

export default Navigation;
