import React from "react";
import { FaFacebookF, FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import './Share.css';

const Share = ({name}: any) => {
  return (
    <>
      <input type="checkbox" id="share-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="share-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="share-header">Share "{name}"</h2>
          <div className="share-icon">
            <FaFacebookF />
            <FaYoutube />
            <FaTwitter />
            <FaInstagramSquare />
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
