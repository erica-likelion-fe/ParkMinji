import React, { useState, useRef } from "react";
import baelImage from "../../../assets/bael.png";
import Modal from "../../../components/modal/Modal";
import "./EditForm.css";
import { useNavigate } from "react-router-dom";

export default function EditForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(baelImage);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsModalOpen(true);
  };

  const handleViewPost = () => {
    navigate("/posting");
  };

  return (
    <div className="edit-form">
      <div className="form-group">
        <label className="field-label">Image *</label>
        <img src={imagePreview} alt="preview" className="preview-image" />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <button className="upload-button" onClick={handleFileButtonClick}>
          My PC
        </button>
      </div>

      <div className="form-group">
        <label className="field-label">Title *</label>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p className="note">*Please enter no more than 20 characters.</p>
      </div>

      <div className="form-group">
        <label className="field-label">Description *</label>
        <textarea
          placeholder="Enter description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <p className="note">*Please enter no more than 200 characters.</p>
      </div>

      <div className="form-group">
        <button className="save-button" onClick={handleSave}>
          Changes Saved
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleViewPost}
        message={
          <>
            Post successfully edited.
            <br />
            See changes?
          </>
        }
        confirmLabel="VIEW POST !"
      />
    </div>
  );
}

