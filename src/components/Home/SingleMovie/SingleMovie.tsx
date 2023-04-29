import React from "react";
import { useLoaderData } from "react-router-dom";
import "./SingleMovie.css";
import { FaCalendarAlt, FaPlay, FaShareAlt, FaStopwatch } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";

const SingleMovie = () => {
  const movie: any = useLoaderData();
  const { name, poster, year, genra, language, length, plot, print } = movie;

  return (
    <div
      // style={{
      //   opacity: "100%",
      //   backgroundPosition: "cover",
      //   backgroundImage: `url(${poster})`,
      // }}
      className="container"
    >
      <div className="movie_details">
        <div className="img">
          <img src={poster} alt="movie-poster" />
        </div>
        <div className="details-content">
          <h1>{name}</h1>
          <div className="details">
            <span>{print}</span>
            <p>{genra}</p>
            <div className="year">
              <FaCalendarAlt className="icon" />
              <p>{year}</p>
            </div>
            <div className="time">
              <FaStopwatch className="icon" />
              <p>{length}</p>
            </div>
          </div>
          <p className="plot">{plot}</p>
          <div className="other">
            <FaShareAlt className="share" />
            <p className="language">Language: {language}</p>
            <button className="button">
              <FaPlay /> Watch
            </button>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1yJ7lXJK5RlvT43N_S82MoQHMd5tjtRWH/edit"
          >
            <button className="download-btn">
              Download <BiDownload />{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
