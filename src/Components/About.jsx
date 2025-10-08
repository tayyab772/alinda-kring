import React from 'react';
import './About.css';
import alindaImg from '../assets/Alinda Kring.jpg'; 
import award from '../assets/award.jpg';

const About = () => {
  return (
    <div>
      <div className="about-layout">
        <div className="about-left">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/5Hc0lFk-erA"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="about-right">
          <p>
            Alinda Kring Art Advisory is an independent art advisory boutique that provides comprehensive collection management services that extend beyond simply buying and selling art. With a strong commitment to both connoisseurship and investment, we work closely with new and seasoned art collectors and help them cultivate their art knowledge, build a visual identity for their collections, improve their positioning in the art market, and gain confidence in their collecting decisions.
          </p>
        </div>
      </div>

      <div className="about-section2">
        <div className="about-section2-left">
          <h2>A journey built through excellence</h2>
          <p>
            Alinda Kring Art Advisory was found by Alinda Kring in London to guide new collectors in the market and help them acquire art they love and wish to collect. Through her network she sources high value artworks on the secondary market and helps individuals create a concept of the art they love by providing accurate market predictions & recommendations. Her business was found solely due to her passion for the industry and the excitement to help others gain a collection they will love.<br /><br />
            Alinda has an MA in Art Business from Sotheby’s Institute of Art and a BSc in Business Management & Financial Accounting from King’s College London.
          </p>
        </div>
        {/* <div className="about-section2-right">
          <img src={alindaImg} alt="Alinda Kring" className="about-full-img" />
        </div> */}
      </div>

      <div className="about-section3">
        <div className="about-section3-text">
          Alinda Kring Art Advisory upholds an inherent belief in supporting artists’ creative potential.<br />
          We connect talented artists to international projects, irrespective of their professional standing, be it emerging or globally-recognised.
        </div>
      </div>

<div className="about-section2">

  <div className="about-section2-right">
          <div className="about-award-wrapper">
            <img
              src={award}
              alt="Award - Alinda Kring"
              className="about-award-img"
              loading="lazy"
            />
          </div>
        </div>
        <div className="about-section2-left">
          <h2>Founder – Alinda Kring Art Advisory</h2>
          <p>
            Alinda Kring is a half German half Turkish London-based art advisor, collector that specialises in collection management & investment portfolio development. Having lived in three countries and 5 cities, she navigates the international art market with confidence guiding clients to build the art collections that suit their needs and contribute to their wealth.
Specialising in Contemporary Art, Luxury and Antiquities, Alinda has placed several works of art in private collections.
          </p>
        </div>
        

      

      </div>
<div className="about-section5">
        <div className="about-section5-text">
         Alinda Kring Art Advisory is revolutionizing the art market by breaking down barriers and creating new opportunities for both emerging artists and collectors. Founded by award-winning entrepreneur Alinda Kring, the firm challenges the traditional gallery model, giving artists the visibility they deserve while connecting them with young, discerning collectors.
With a background in finance and a master’s in Art Business from Sotheby’s Institute, Alinda combines business acumen with a deep passion for art. Operating in London, Dubai, Paris, and Barcelona, the firm manages high-value collections, curates prestigious exhibitions, and bridges the gap between artists and collectors worldwide.
       <h2>We’re shaping the future of the art market, creating a more inclusive and dynamic space for all.</h2>
       
        </div>
      </div>

    </div>
  );
};

export default About;