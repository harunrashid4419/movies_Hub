import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="footer-section">
          <div className="left">
            <p>Copyright © 2023 - All right reserved by MoviesHub</p>
          </div>
          <div className="right">
            <a href="https://www.facebook.com" target="_black">
              <FaFacebookF />
            </a>
            <a href="https://wwwtwitter.com" target="_black">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com" target="_black">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com" target="_black">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
