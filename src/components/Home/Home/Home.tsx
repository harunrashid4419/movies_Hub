import React from "react";
import Banner from "../Banner/Banner";
import Movies from "../Movies/Movies";
import TopRated from "../TopRated/TopRated";
import { MdLocalMovies } from "react-icons/md";
import "./Home.css";
import MobileOffline from "../MobileOffline/MobileOffline";
import { Link } from "react-router-dom";
import Frequently from "../Frequently/Frequently";
import Cart from "../Cart/Cart";
import Trial from "../Trial/Trial";
import Details from "../Details/Details";
import Content from "../Content/Content";
import Series from "../Series/Series";

const Home = () => {
  return (
    <div>
      <Banner />
      <Content />
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
      <Series />
      <MobileOffline />
      <Frequently />
      <Cart />
      <Trial />
      <Details />
    </div>
  );
};

export default Home;
