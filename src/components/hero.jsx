import React, { useState } from 'react';
import './hero.css';
import img from "../images/home.jpg"
import Navbar from './navbar';

function App() {
  return (
    <div
      className="Hero"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <Navbar />
      <header id="home" className="hero">
        <div class="overlay1"></div>
        <div className="hero-content">
          <h1><span style={{fontSize:'5 rem'}}>Welcome to,</span> <br/><span className='head-name'>Magic Moments<br/>Jungle resort</span></h1>
         
        </div>
      </header>
    </div>
  );
}

export default App;
