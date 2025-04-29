import React from "react";

const Modal = ({ videoUrl, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-md z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-xl w-1/2 max-w-xl">
        <button className="absolute top-2 right-2 text-xl bg-amber-200 text-gray-100" onClick={onClose}>
          ✖
        </button>
        <iframe
          className="w-full h-64"
          src={videoUrl}
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;
