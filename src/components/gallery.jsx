import React, { useEffect } from "react";
import "./gallery.css";
import "aos/dist/aos.css"
import Aos from "aos"
import img1 from "../images/inner1.jpg"
import img2 from "../images/inner2.jpg"
import img3 from "../images/outerresort1.jpg"
import img4 from "../images/outerresort2.jpg"
import img5 from "../images/outerresort3.jpg"
import img6 from "../images/outerresort4.jpg"
import { Link } from "react-router-dom";


export default function Gallery () {
   useEffect(()=>{
          Aos.init({disable:'mobile'})
    },[]);
  return (
    <div className="container" id="gallery">
      <header className="header">
        <h1>Explore The Most Beautiful <br/><span className="gal-sub-head">- Places In The World</span></h1>
        <button className="explore-button"><Link to='/views'>Explore</Link></button>
      </header>
      <div className="image-grid" >
      <div className="img-container" id="image-container-1" >
    <div className="image-wrapper" >
      <img
        src={img1}
        alt="Place 1"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      
    </div>
  </div>
  <div className="img-container" id="image-container-2">
    <div className="image-wrapper">
      <img
        src={img2}
        alt="Place 2"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      
    </div>
    <div className="image-wrapper">
      <img
        src={img6}
        alt="Place 3"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      
    </div>
  </div>
  <div className="img-container" id="image-container-3">
    <div className="image-wrapper">
      <img
        src={img3}
        alt="Place 4"
        data-aos="fade-up"
        data-aos-duration="500"
      />
      
    </div>
    <div className="image-wrapper">
      <img
        src={img5}
        alt="Place 5"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      
    </div>
  </div>
  <div className="img-container" id="image-container-4">
    <div className="image-wrapper">
      <img
        src={img4}
        alt="Place 6"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      
    </div>
  </div>
      </div>
    </div>
  );
};