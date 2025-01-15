import React from 'react';

const CustomItem = ({ imageSrc, title, description }) => (
  <div className="custom-item">
    <div className="img">
      <img src={imageSrc} alt={title} className="custom-image" />
    </div>
    <h2 className="custom-item-heading">{title}</h2>
    <p className="custom-item-text">{description}</p>
  </div>
);

export default CustomItem;
