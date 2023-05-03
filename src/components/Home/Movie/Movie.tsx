import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./Movie.css";

type UserProps = {
  movie: {
    _id: string;
    name: string;
    poster: string;
    year: number;
    genra: string;
    length: string;
    print: string;
    language: string;
    plot: string;
    imdb: number;
  };
};
const Movie = ({ movie }: UserProps) => {
  const { poster, name, _id, imdb } = movie;
  return (
    <Link to={`../movie/${_id}`}>
      <div className="single-movie">
        <img className="popularMovie-img" src={poster} alt="movie-poster" />
        <p className="imdb-rating">IMDB Rating: {imdb}</p>
        <div className="flex-content">
          <div className="content">
            <h3>{name}</h3>
            <button>
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
