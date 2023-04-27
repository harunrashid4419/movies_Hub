import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-black py-10">
      <div className="container footer-section">
        <div className="flex-column">
          <h1>Company</h1>
          <Link to="">Home</Link>
          <Link to="">Movies</Link>
          <Link to="">Request Movie</Link>
        </div>
        <div className="flex-column">
          <h1>Category</h1>
          <Link to="">Action</Link>
          <Link to="">Comedy</Link>
          <Link to="">Drama</Link>
          <Link to="">Romance</Link>
        </div>
        <div className="flex-column">
          <h1>MoviesHub</h1>
          <p>Road 152, Mirpur, Dhaka, Bangladesh</p>
          <p><span>Phone:</span> +880745454554</p>
          <p><span>Email:</span> movies.hub@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
