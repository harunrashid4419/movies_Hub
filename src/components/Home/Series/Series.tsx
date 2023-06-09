import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Movie from "../Movie/Movie";
import { MdLocalMovies } from "react-icons/md";

const Series = () => {
  const { data: series } = useQuery({
    queryKey: ["series"],
    queryFn: async () => {
      const res = await fetch("https://movie-hub-server.vercel.app/series");
      const data = res.json();
      return data;
    },
  });

  return (
    <div className="container">
      <div className="latest_movies">
        <div className="header">
          <MdLocalMovies /> <p>Latest Series</p>
        </div>
        <div className="movie-section">
          {series && (
            <>
              {series?.map((movie: any) => (
                <Movie key={movie._id} movie={movie}></Movie>
              ))}
            </>
          )}
        </div>
        <div className="all-btn">
          <Link to="/movies">
            More Series <FaArrowRight />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Series;
