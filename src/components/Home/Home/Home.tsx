import React from "react";
import Banner from "../Banner/Banner";
import Movies from "../Movies/Movies";
import TopRated from "../TopRated/TopRated";
import { MdLocalMovies } from "react-icons/md";
import './Home.css';
import MobileOffline from "../MobileOffline/MobileOffline";

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
      <MobileOffline />
    </div>
  );
};

export default Home;
