import React from 'react';
import ImageCard from './ImageCard';
import './GalleryGrid.css';

const dummyData = Array(16).fill().map((_, i) => ({
  title: 'Lorem ipsum',
  description: 'Lorem ipsum dolor sit amet consectetur. At dignissim orci...',
  imageUrl: '', // 이미지 URL 없으면 회색 배경 유지
}));

const GalleryGrid = () => {
  return (
    <div className="gallery-grid">
      {dummyData.map((item, index) => (
        <ImageCard key={index} {...item} />
      ))}
    </div>
  );
};

export default GalleryGrid;
