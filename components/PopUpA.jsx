import React, { useState } from "react";
import { FaPlus } from "react-icons/fa"; // Import the desired icon
import Modal from "./ModalA"; // Adjust the path as needed
import AddTopic from "@/app/addTopic/page";

export default function Popup() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        className="p-2 bg-white rounded hover:bg-gray-600  text-gray-600 hover:text-gray-300"
        onClick={handleOpenModal}
      >
        <FaPlus />{" "}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        content={<AddTopic onClose={handleCloseModal} />}
      />
    </div>
  );
}
