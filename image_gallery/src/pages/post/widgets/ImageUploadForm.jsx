import React, { useState } from 'react';
import './ImageUploadForm.css';

const ImageUploadForm = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <form className="upload-form">
      <label>Image <span>*</span></label>
      <div
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        ⇨ Drag and drop your file here.
      </div>

      <label className="upload-btn-wrapper">
        <input type="file" onChange={handleFileChange} />
        <div className="upload-button">My PC</div>
      </label>

      <label>Title <span>*</span></label>
      <input
        type="text"
        placeholder="Text"
        value={title}
        onChange={(e) => setTitle(e.target.value.slice(0, 20))}
      />
      <p className="note">*Please enter no more than 20 characters.</p>

      <label>Description <span>*</span></label>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value.slice(0, 200))}
      />
      <p className="note">*Please enter no more than 200 characters.</p>
    </form>
  );
};

export default ImageUploadForm;
