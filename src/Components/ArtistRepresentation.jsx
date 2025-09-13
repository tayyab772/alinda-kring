import React from "react";
import "./ArtistRepresentation.css";

const ArtistRepresentation = () => {
  return (
    <div className="artist-rep-section">
      <div className="artist-rep-container">
        <h1 className="artist-rep-heading">
          Artist Representation – Empowering Creative Careers
        </h1>

        <ul className="artist-rep-list">
          <li>
            <span className="rep-label">Gallery Representation:</span> Assist in finding gallery spaces suitable for showcasing the Artist’s work.
          </li>
          <li>
            <span className="rep-label">Exhibition Management:</span> Arrange exhibitions and special events to display and promote the Artist’s work.
          </li>
          <li>
            <span className="rep-label">Career Guidance:</span> Provide strategic advice on the Artist’s career development, including positioning, marketing, and pricing strategies.
          </li>
          <li>
            <span className="rep-label">Networking:</span> Facilitate introductions to key industry players, including galleries, collectors, curators, and potential buyers.
          </li>
          <li>
            <span className="rep-label">Training Sessions:</span> Conduct three training sessions per month focusing on marketing, pricing, branding, and developing a business mindset as an artist.
          </li>
          <li>
            <span className="rep-label">Project Management:</span> Dedicate 14 hours per week to managing the Artist’s projects, ensuring deadlines are met, and overseeing all administrative tasks related to exhibitions and sales.
          </li>
          <li>
            <span className="rep-label">Promotion and Branding:</span> Assist in developing the Artist’s brand, including creating a social media strategy, managing online presence, and creating promotional materials.
          </li>
          <li>
            <span className="rep-label">Digital Presence:</span> Provide assistance in building and managing the Artist’s website or online portfolio, ensuring it remains updated and professional.
          </li>
          <li>
            <span className="rep-label">Sales and Representation:</span> Actively promote and market the Artist’s works to potential buyers, galleries, and museums, both locally and internationally.
          </li>
          <li>
            <span className="rep-label">Grant and Residency Applications:</span> Assist with identifying and applying for grants, residencies, and other professional opportunities that will benefit the Artist’s career.
          </li>
        </ul>

        <h2 className="artist-rep-tagline">
          We’re committed to shaping your artistic journey with strategy, visibility, and care.
        </h2>
      </div>
    </div>
  );
};

export default ArtistRepresentation;
