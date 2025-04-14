import React from 'react';
import './newabout.css';
import img from "../images/aboutnew2.jpg" // adjust path as needed

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-left">
        <img src={img} alt="About Us" className="about-img" />
      </div>
      <div className="about-right">
        <h4 className="about-subtitle">About Us</h4>
        <h2 className="about-title">We Always Make The Best</h2>
        <p className="about-text">
          The resort made up of mud, which takes back you to the ancient nature<br/>TO BOOK THE RESORT CONTACT THE NUMBER GIVEN.
        </p>
        <button className="about-btn">Contact Us</button>
      </div>
    </div>
  );
}
