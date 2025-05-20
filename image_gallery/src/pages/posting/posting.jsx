import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import ImageTextCard from "./widgets/ImageTextCard";
import bael from "../../assets/bael.png";
import Modal from "../../components/modal/Modal";
import "./posting.css";

export default function Posting() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    console.log("삭제 로직 실행");
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="posting">
      <Header />
      <ImageTextCard
        imageUrl={bael}
        title={"Lorem ipsum"}
        date={"2025.04.15"}
        description={"Lorem ipsum dolor sit amet consectetur. Aenean felis sed amet fames. Quam pellentesque amet tincidunt volutpat aliquet. Amet bibendum leo aliquet pellentesque aliquam urna. Egestas donec viverra id facilisi in nunc vulputate. Massa nunc at consequat suscipit sit pulvinar adipiscing ac. Mauris feugiat malesuada in nulla. Nulla erat et vitae ut odio amet erat. Quis rhoncus egestas dictumst ullamcorper sed. Scelerisque morbi pellentesque senectus ultricies. Vel proin tincidunt et vel a sed quam. Morbi enim aliquet tellus dignissim luctus sed. Mattis feugiat egestas mattis in iaculis. Nisl ac quis eros massa pellentesque enim est lacinia."}
      />

      <div className="post-buttons">
        <button className="post-button" onClick={() => setIsDeleteModalOpen(true)}>Delete Post</button>
        <button className="post-button" onClick={()=> navigate("/edit")} >Edit Post</button>
      </div>

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        message="Are you sure you want to delete this post?"
        confirmLabel="DELETE"
      />
    </div>
  );
}
