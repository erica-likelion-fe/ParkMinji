import React from "react";
import "./SubmitBox.css";

function SubmitBox({ onSubmit }) {
  return (
    <div className="box">
      <button className="submit-button" onClick={onSubmit}>
        Submit Post
      </button>
    </div>
  );
}

export default SubmitBox;
