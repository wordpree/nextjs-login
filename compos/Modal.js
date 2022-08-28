import React from "react";

const Modal = ({ open, handleClose, msg }) => {
  return (
    open && (
      <div className="modal">
        <h3>Login Failed</h3>
        <span>{msg}</span>
        <button onClick={handleClose}>Close</button>
      </div>
    )
  );
};

export default Modal;
