import React from "react";
import Banner from "../Banner/Banner";
import Movies from "../Movies/Movies";
import TopRated from "../TopRated/TopRated";
import { MdLocalMovies } from "react-icons/md";
import "./Home.css";
import MobileOffline from "../MobileOffline/MobileOffline";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="movies-top-rated container">
        <MdLocalMovies />
        <h1>Top Rated Movies</h1>
      </div>
      <TopRated />
      <Movies />
      <p className="empty-movie container">
        N.B: I need a movie but this website doesn't have that movie. You can
        now send a request for that movie to the admin. {""}
        <Link to="/movieRequest">Go to request page</Link>
      </p>
      <MobileOffline />
    </div>
  );
};

export default Home;
