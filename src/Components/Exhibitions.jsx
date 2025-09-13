import React from 'react';
import './Exhibition.css';
import ExhibitionItem from './ExhibitionItem';

// Apni images ka sahi path lagayen
import img1 from '../assets/exhibition1.jpg';
import img2 from '../assets/exhibition2.jpg';
import img3 from '../assets/exhibition3.jpg';
import img4 from '../assets/exhibition4.jpg';
import img5 from '../assets/exhibition5.jpg';
import img6 from '../assets/exhibition6.jpg';
import img7 from '../assets/exhibition7.jpg';
import img8 from '../assets/exhibition8.jpg';
import img9 from '../assets/exhibition9.jpg';
import img10 from '../assets/exhibition10.jpg';

const exhibitionsData = [
  {
    imgSrc: img1,
    title: 'Previous Exhibition',
    subtitle: 'Four Seasons Hotel',
    description:
      'An exclusive art exhibition was hosted at the prestigious Four Seasons Hotel, showcasing a curated selection of contemporary and classic masterpieces. The event brought together art collectors, enthusiasts, and industry professionals in a luxurious setting, celebrating artistic excellence and creative expression. With a refined ambiance and world-class hospitality, the exhibition provided a unique platform for emerging and established artists to connect with a discerning audience.',
  },
  {
    imgSrc: img2,
    title: 'Previous Exhibition',
    subtitle: 'Gallery Marquess Mayfair',
    description:
      'Gallery Marquess Mayfair is a prestigious art gallery in London’s Mayfair, showcasing exceptional contemporary and classic artworks. With curated exhibitions and exclusive artist collaborations, it offers a refined space for collectors and art enthusiasts.',
  },
  {
    imgSrc: img3,
    title: 'Previous Exhibition',
    subtitle: 'Gallery Marquess Mayfair',
    description:
      'Gallery Marquess Mayfair is a prestigious art gallery in London’s Mayfair, showcasing exceptional contemporary and classic artworks. With curated exhibitions and exclusive artist collaborations, it offers a refined space for collectors and art enthusiasts.',
  },
  {
    imgSrc: img4,
    title: 'Previous Exhibition',
    subtitle: 'Coya City',   
    description:
      'Coya City by Gavin Johnson offered a bold exploration of urban life through dynamic cityscapes and vibrant compositions. The exhibition captured the essence of bustling city streets, blending intricate details with powerful strokes. Johnson’s artwork highlighted the energy and spirit of city living, offering a fresh perspective on modern metropolises.',
  },
{
    imgSrc: img5,
    title: 'Current Exhibition',
    subtitle: 'Coya Mayfair',
    description:
      'Coya Mayfair showcases Gavin J.’s stunning collection that brings together the elegance of Mayfair with a modern artistic twist. Through vibrant colors and detailed compositions, Gavin captures the essence of the iconic London district. This exhibition offers a unique perspective on the beauty of urban life and the sophistication of the city’s atmosphere.',
  },
{
    imgSrc: img6,
    title: 'Previous Exhibition',
    subtitle: 'Coya City',
    description:
      'Experience Coya City, where Brad Kenny explores the pulse of urban life through bold strokes and vivid details. This exhibition captures the energy, architecture, and essence of modern cities, offering a dynamic portrayal of contemporary cityscapes.',
  },
  {
    imgSrc: img7,
    title: 'Femme Forward: One Exhibition, Three Perspectives',   
    subtitle: 'ST.ART Gallery',
    description:
      'Women’s day exhibition featuring Artists Halise Karakaya, Jo Li and Ceren Muftuoglu',
  },
  {
    imgSrc: img8, 
    title: 'Current Exhibition',
    subtitle: 'Coya City',
    description:
      'Check out Courtenay Kusitor’s art show at Coya City! She paints the vibe of city life with bright colors and bold strokes. Her work shows the energy and feel of modern cities in a cool, abstract way. Come see her amazing paintings that mix impressionist and expressionist styles. Don’t miss it!',
  },
   {
    imgSrc: img9, 
    title: 'Current Exhibition',
    subtitle: 'Coya City',
    description:
      'Alinda Kring Art Advisory hosted an exhibition featuring the works of artist Kate Mayer. The event showcased her creative and expressive pieces, attracting art enthusiasts and collectors. It provided a platform to experience her artistic vision up close in an engaging setting.',
  },
 {
    imgSrc: img10, 
    title: 'Current exhibition',
    subtitle: 'At Platform Store Marylebone',
    description:
      'Alinda Kring Art Advisory hosted an exhibition featuring the works at platform store Marylebone. The event showcased her creative and expressive pieces, attracting art enthusiasts and collectors. It provided a platform to experience her artistic vision up close in an engaging setting.',
  },
];

const Exhibitions = () => {
  return (
    <div className="exhibition-page">
      <h2>Exhibitions</h2>
      {exhibitionsData.slice().reverse().map((item, idx) => (
        <ExhibitionItem
          key={idx}
          imgSrc={item.imgSrc}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Exhibitions;