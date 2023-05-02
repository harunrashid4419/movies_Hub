import React, { useContext, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";
import { toast } from "react-hot-toast";

const Login = () => {
  const { login }: any = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // login
    login(email, password)
      .then((result: any) => {
        const user = result.user;
        console.log(user);
        setError("");
        toast.success("Login Successfull");
        navigate("/");
      })
      .catch((error: any) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="container">
      <div className="singup-section">
        <h1>LogIn</h1>
        <form onSubmit={handleLogin}>
          <div className="input-type">
            <span className="label-text">Email</span>
            <br />
            <input
              type="email"
              name="email"
              placeholder="movies.hub@gmail.com"
              required
            />
          </div>
          <div className="input-type">
            <span className="label-text">Password</span>
            <br />
            <input
              type="password"
              name="password"
              placeholder="*******"
              required
            />
          </div>
          {error && <h4 className="text-red-500">{error}</h4>}
          <h5 className="forget-pass">Forget Password?</h5>
          <button>
            <BiDownload className="icon" /> Log In
          </button>
        </form>
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
