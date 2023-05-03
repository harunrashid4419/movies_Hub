import React from "react";
import "./Trailer.css";
import ReactPlayer from "react-player/youtube";

const Trailer = () => {
  return (
    <>
      <input type="checkbox" id="trailer-modal" className="modal-toggle" />
      <div className="modal">
        <div id="trailer-modal" className="modal-box relative">
          <label
            htmlFor="trailer-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <ReactPlayer width='100%' height='100%' url="https://www.youtube.com/watch?v=MvPaDziB-ac" />
        </div>
      </div>
    </>
  );
};

export default Trailer;
