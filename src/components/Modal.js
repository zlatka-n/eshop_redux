import React from "react";
import ReactDOM from "react-dom";
import "../css/modal.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <span className="modal-content">
        <span className="closeModalIcon">{props.closeModal}</span>
        <div className="modalTitle">{props.title}</div>
        <div className="modalBtn-container">{props.actions}</div>
      </span>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
