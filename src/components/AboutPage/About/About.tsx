import React from "react";
import img from "../../../assets/about2.jpg";
import "./About.css";
import AboutBanner from "../AboutBanner/AboutBanner";

const About = () => {
  return (
    <>
      <AboutBanner />
      <div className="container">
        <div className="main-about">
          <div className="content">
            <h1>Welcome to our moviesHub website.</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="users">
              <div className="flex-column">
                <h1>5K</h1>
                <h2>Movies</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and</p>
              </div>
              <div className="flex-column">
                <h1>3K</h1>
                <h2>Users</h2>
                <p>
                  Completely free, without registration! Lorem Ipsum is simply
                </p>
              </div>
            </div>
          </div>
          <div className="img">
            <img src={img} alt="About img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
