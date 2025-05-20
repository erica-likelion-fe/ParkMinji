import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import EditForm from "./widgets/EditForm";
import SubmitBox from "./widgets/SubmitBox";
import Modal from "../../components/modal/Modal";

export default function Edit() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="edit">
      <Header />
      <EditForm />
    </div>
  );
}

