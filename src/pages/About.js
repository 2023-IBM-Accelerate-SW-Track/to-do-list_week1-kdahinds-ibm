import React, { Component } from 'react';
import "./About.css";
import kdh_profile1 from "../assets/KDH_Patent1_Cropped.png";

  
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
    <div className="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={kdh_profile1}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Kieron D Hinds</div>
        <div className="role_subtitle">Senior Technical Staff Member,</div>
        <div className="role_subtitle">IBM Customer Test</div>
        <div className="brief_description">
           Responsible for test strategy for IBM's premier testing team for teh mainframe IBM Z server, including ensuring a comprehensive roadmap covering quality assurance for IBM Z, z/OS and DS8K strategic initiatives with rigorous testing required for mature components
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}