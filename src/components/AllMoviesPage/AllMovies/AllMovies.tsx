import React from "react";
import "./Allmovies.css";
import { useLoaderData } from "react-router-dom";
import { MdLocalMovies } from "react-icons/md";
import Movie from "../../Home/Movie/Movie";

const AllMovies = () => {
  const allMovies: any = useLoaderData();
  return (
    <div className="container all_movies">
      <h1>
        <MdLocalMovies /> All Movies
      </h1>
      <div className="movie-section">
        {allMovies.map((movie: any) => (
          <Movie key={movie._id} movie={movie}></Movie>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
