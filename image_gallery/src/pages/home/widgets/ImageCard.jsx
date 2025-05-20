import React from 'react';
import './ImageCard.css';
import { useNavigate } from 'react-router-dom';


const ImageCard = ({ title, description, imageUrl }) => {
  const navigate = useNavigate();

  return (
    <div className="image-card" onClick={()=> navigate('/posting')}>
      <div className="image-placeholder" style={{ backgroundImage: `url(${imageUrl})` }} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ImageCard;
