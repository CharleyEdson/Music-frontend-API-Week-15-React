import "./EditModal.jsx";
import React, { useState, useEffect } from "react";
import "../CreateSong/CreateSong";
import EditSong from "../EditSong/EditSong.jsx";

const Modal = ({ open, onClose, song, getAllSongs }) => {
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
          <EditSong getAllSongs={getAllSongs} song={song}/>
        </div>
      </div>
    </div>
  );
};

export default Modal;
