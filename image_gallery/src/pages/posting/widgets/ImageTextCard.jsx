import React from "react";
import "./ImageTextCard.css";

export default function ImageTextCard({ imageUrl, title, date, description }) {
  return (
    <div className="card-wrapper">
      <img src={imageUrl} alt="card" className="card-image" />
      
      <div className="title-date-block">
        <h2 className="card-title">{title}</h2>
        <p className="card-date">{date}</p>
      </div>

      <p className="card-desc">{description}</p>
    </div>
  );
}
