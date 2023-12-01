import React from "react";
import "../styles/modal.css";

const Modal = (props) => {
  let { show, onClose, title, children } = props;

  return (
    <div className={`modal ${show ? "show" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h1 className="modal-title">{title}</h1>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button className="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
