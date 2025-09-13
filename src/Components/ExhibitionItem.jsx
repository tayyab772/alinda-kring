import React from 'react';
import './Exhibition.css';

const ExhibitionItem = ({ imgSrc, title, subtitle, description }) => (
  <div className="exhibition-content">
    <img src={imgSrc} alt={title} className="exhibition-img" />
    <div className="exhibition-info">
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{description}</p>
    </div>
  </div>
);

export default ExhibitionItem;