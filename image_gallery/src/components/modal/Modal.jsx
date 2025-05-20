import React from "react";
import "./Modal.css";

export default function Modal({ isOpen, onClose, onConfirm, message, confirmLabel = "OK" }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>×</button>
        <p>{message}</p>
        <button className="modal-view" onClick={onConfirm}>{confirmLabel}</button>
        <button className="modal-cancel" onClick={onClose}>CANCEL</button>
      </div>
    </div>
  );
}
