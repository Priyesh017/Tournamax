"use client";
import React, { useState } from "react";
import Modal from "@/components/ModalU";
import EditTopic from "@/app/editTopic/[id]/page";
import { HiPencilAlt } from "react-icons/hi";

export default function PopupU({ id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="p-2 rounded text-gray-600 hover:text-gray-300">
        <HiPencilAlt size={24} onClick={handleOpenModal} />
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <EditTopic id={id} onClose={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
}
