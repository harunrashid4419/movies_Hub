import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { BiDownload } from "react-icons/bi";

const Signup = () => {
  return (
    <div className="container">
      <div className="singup-section">
        <h1>SignUp</h1>
        <div className="input-type">
          <span className="label-text">FullName</span>
          <br />
          <input type="text" placeholder="Mitchel Smith" required />
        </div>
        <div className="input-type">
          <span className="label-text">Email</span>
          <br />
          <input type="email" placeholder="movies.hub@gmail.com" required />
        </div>
        <div className="input-type">
          <span className="label-text">Password</span>
          <br />
          <input type="password" placeholder="*******" required />
        </div>
        <button>
          {" "}
          <BiDownload className="icon" /> Sign Up
        </button>
        <p>
          Already have an account? <Link to="/login">LogIn</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
