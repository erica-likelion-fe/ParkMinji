import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import ImageUploadForm from "./widgets/ImageUploadForm";
import SubmitBox from "./widgets/SubmitBox";
import Modal from "../../components/modal/Modal";

import "./Post.css";
import SizedBox from "../../components/SizedBox";

export default function Post() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsModalOpen(true);
  };

  const handleViewPost = () => {
    navigate("/posting");
  };

  return (
   <div width="100%" height="100%" style={{  
    justifyContent: "center",
    alignItems: "center",
   }}>
     <div className="post">
      <Header />
      <SizedBox width={0} height={100} />
      <ImageUploadForm />
      <SizedBox width={0} height={100} />

      <SubmitBox onSubmit={handleSubmit} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleViewPost}
        message={
          <>
            Post published!
            <br />
            Do you want to see it?
          </>
        }
        confirmLabel="VIEW POST !"
      />
    </div>
   </div>
  );
}
