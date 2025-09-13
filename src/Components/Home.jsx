

import React from 'react';
import './Home.css';
// import heroVideo from '../assets/hero-video.mp4';
// import heroVideo from '../../public/hero-video.mp4';
import infoImage from '../assets/banner-2.png';
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="home-page-wrapper">
      {/* Hero Section Start */}
      <section className="hero-section">
        {/* Background Overlay for readability */}
        <div className="background-overlay"></div>

        {/* Content Container (for text and video) */}
        <div className="hero-content-container">
 {/* Right Div for Text */}
          <div className="hero-text-column">
            <p className="hero-subtitle">ART OF COLLECTING</p>
            <h1 className="hero-title">EXPLORE THE WORLD OF ART—LET YOUR <br/> COLLECTION TELL A UNIQUE STORY.</h1>
            <p className="hero-description">
              FOR ARTISTS, COLLECTORS & ART LOVERS – ELEVATING CREATIVITY, CULTIVATING CONNECTIONS. WHETHER YOU’RE CREATING, COLLECTING, OR SIMPLY APPRECIATING, WE BRIDGE THE GAP BETWEEN TALENT AND OPPORTUNITY, MAKING ART MORE ACCESSIBLE, MEANINGFUL, AND IMPACTFUL.
            </p>
          </div>


          {/* Left Div for Video */}
          <div className="hero-media-column">
            <div className="video-wrapper">
             <video className="hero-video" autoPlay loop muted playsInline>
  <source src="/hero-video.mp4" type="video/mp4" />
</video>

             
           
            </div>
          </div>

         



        </div>
      </section>

      {/* New Section: Image Left, Text Right */}
      <section className="info-section">
        <div className="info-content-container">

  {/* Right: Text */}

          <div className="info-text-column">
            <p className="info-description">
              Exciting News! Alinda Kring, 
              founder of Alinda Kring Art Advisory,
               has been named Young Business Person
                of the Year 2025 by the London Chamber 
                of Commerce and Industry—for the second 
                year in a row! Our mission to revolutionize
                 the art market continues, breaking barriers and 
                 creating new opportunities for emerging artists and collectors. 
                 Thank you for being part of this journey!
            </p>
           <Link to="/about">
  <button className="info-learnmore-btn">Learn More</button>
</Link>
          </div>
         
          {/* Left: Image */}
          <div className="info-image-column">
            <img src={infoImage} alt="Artistic Display" className="info-image" />
          </div>

       



        </div>
      </section>

    </div>
  );
}

export default HomePage;