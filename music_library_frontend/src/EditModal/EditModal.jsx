import "./EditModal.jsx";
import React, { useState, useEffect } from "react";
import "../CreateSong/CreateSong";
import CreateSong from "../CreateSong/CreateSong";

const Modal = ({ open, onClose, song }) => {
  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modalContainer">
        <img alt="" />
        <div className="modalRight">
          <p onClick={onClose} className="closeBtn">
            X
          </p>
          <div className="content"></div>
        </div>
        <div className="btnContainer">
          <CreateSong />
        </div>
      </div>
    </div>
  );
};

export default Modal;
