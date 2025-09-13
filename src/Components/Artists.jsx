import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Artists.css';
import defaultBg from '../assets/default.jpg';
import cerenImg from '../assets/ceren.jpg';
import joliImg from '../assets/joli.jpg';
import gavinImg from '../assets/gavin.jpg';
import sevilDuruImg from '../assets/sevil duru.jpg';
import annaSudbinaImg from '../assets/anna sudbina.jpg';
import akshitaLadImg from '../assets/akshita lad.jpg';
import kateImg from '../assets/kate.jpg';
import anasseImg from '../assets/anasse.png';

// const artists = [
//   { name: 'ANASSE', img: anasseImg },
//   { name: 'JOLI', img: joliImg },
//   { name: 'GAVIN', img: gavinImg },
//   { name: 'SEVIL', img: sevilDuruImg },
//   { name: 'ANNA', img: annaSudbinaImg},
//     { name: 'AKSHITA', img: akshitaLadImg },
//     { name: 'KATE', img: kateImg },
    
  
// ];


const artists = [
  { key: "anasse", displayName: "Anasse Drif", img: anasseImg },
  { key: "joli", displayName: "Joli", img: joliImg },
  { key: "gavin", displayName: "Gavin Johnson", img: gavinImg },
  { key: "sevil", displayName: "Sevil Duru", img: sevilDuruImg },
  { key: "anna", displayName: "Anna Sudbina", img: annaSudbinaImg },
  { key: "akshita", displayName: "Akshita Lad", img: akshitaLadImg },
  { key: "kate", displayName: "Kate Mayer", img: kateImg },
];


function Artists() {
  const [bgImage, setBgImage] = useState(defaultBg);

  return (
    <div
      className="artists-page"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease',
        minHeight: '100vh',
        width: '100vw',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        paddingTop: '70px' // Navbar ki height ke hisaab se adjust karein
      }}
    >
      <div className="artists-list">
        {/* {artists.map((artist, idx) => (
          <Link
            key={idx}
            to={`/artists/${artist.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="artist-name"
            onMouseEnter={() => setBgImage(artist.img)}
          >
            {artist.name}
          </Link>
        ))} */}

        {artists.map((artist, idx) => (
  <Link
    key={idx}
    to={`/artists/${artist.key}`}   // backend-safe
    className="artist-name"
    onMouseEnter={() => setBgImage(artist.img)}
  >
    {artist.displayName}         
  </Link>
))}

      </div>
    </div>
  );
}

export default Artists;