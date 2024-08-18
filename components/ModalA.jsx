// components/Modal.jsx
import React from "react";

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center px-4">
      <div className="bg-black bg-opacity-60 border-2 border-violet-700 p-4 rounded shadow-lg w-full max-w-md">
        <div>{content}</div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-300 py-2 px-4 rounded mr-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
