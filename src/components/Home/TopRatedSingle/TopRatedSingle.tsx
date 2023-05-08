import React from "react";
import { FaCalendarAlt, FaPlay, FaShareAlt, FaStopwatch } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Share from "../../Modal/Share/Share";
import Trailer from "../../Modal/Trailer/Trailer";
import { BiDownload } from "react-icons/bi";
import Cast from "../Cast/Cast";
import MovieReview from "../MovieReview/MovieReview";

const TopRatedSingle = () => {
  const movie: any = useLoaderData();
  const { name, poster, year, genra, language, length, plot, print, _id } =
    movie;
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
            <label htmlFor="share-modal">
              <FaShareAlt className="share" />
            </label>
            <Share name={name} />
            <p className="language">Language: {language}</p>
            <label htmlFor="trailer-modal">
              <div className="trailer">
                <FaPlay /> Watch
              </div>
            </label>
            <Trailer />
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
      <Cast movie={movie} />
      <MovieReview _id={_id} name={name} />
    </div>
  );
};

export default TopRatedSingle;
