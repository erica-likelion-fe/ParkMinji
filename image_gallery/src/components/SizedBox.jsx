// SizedBox.jsx
import React from 'react';

const SizedBox = ({ width = 0, height = 0 }) => {
  return (
    <div style={{ width, height }} />
  );
};

export default SizedBox;