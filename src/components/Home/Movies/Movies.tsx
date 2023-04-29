import React from "react";
import { MdLocalMovies } from "react-icons/md";
import "./Movies.modules.css";
import Movie from "../Movie/Movie";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Movies = () => {
  const movies: any = useLoaderData();
  return (
    <div className="container">
      <div className="latest_movies">
        <div className="header">
          <MdLocalMovies /> <p>Latest Movies</p>
        </div>
        <div className="movie-section">
          {movies.map((movie: any) => (
            <Movie key={movie._id} movie={movie}></Movie>
          ))}
        </div>
        <div className="all-btn">
          <Link to="/movies">More Movies <FaArrowRight /> </Link>
        </div>
      </div>
    </div>
  );
};

export default Movies;
