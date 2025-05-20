import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title }) => {
  return (
    <div className="section-header">
      <div className="red-bar" />
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeader;
