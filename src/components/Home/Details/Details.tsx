import React from "react";
import "./Details.css";
import { FaBandcamp, FaPhoneVolume } from "react-icons/fa";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";

const Details = () => {
  return (
    <div className="main-details">
      <div className="container">
        <div className="details-section">
          <div className="flex-column">
            <FaBandcamp />
            <h6>
              Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed do
              eiusmod tempor incididunt ut labore et.
            </h6>
          </div>
          <div className="flex-column">
            <h3>Explore</h3>
            <p>Movies</p>
            <p>Serice</p>
            <p>Watchlist</p>
            <p>Podcasts</p>
          </div>
          <div className="flex-column">
            <h3>Account</h3>
            <p>Choose a plan</p>
            <p>Landing Page</p>
            <p>My Account</p>
            <p>Contact</p>
          </div>
          <div className="flex-column">
            <h3>Contact</h3>
            <div className="icon-content">
              <HiLocationMarker />
              <p>66 Brooklyn Street, NY United States</p>
            </div>
            <div className="icon-content">
              <FaPhoneVolume />
              <p>1-800-123-4567</p>
            </div>
            <div className="icon-content">
              <HiOutlineMail />
              <p>movies.hub@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
