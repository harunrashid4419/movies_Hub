import React from "react";
import { BiDownload } from "react-icons/bi";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="singup-section">
        <h1>LogIn</h1>
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
        <h5 className="forget-pass">Forget Password?</h5>
        <button>
          {" "}
          <BiDownload className="icon" /> Log In
        </button>
        {/* <div className="divider">OR</div>
        <div className="google-icon">
          <FaGooglePlusG className="google" />
        </div> */}
        <p>
          Don't have any account? <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
