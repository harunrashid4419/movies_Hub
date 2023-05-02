import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { BiDownload } from "react-icons/bi";
import { AuthContext } from "../../../UserContext/UserContext";
import { toast } from "react-hot-toast";

const Signup = () => {
  const { createUser, profileUpdated }: any = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // create user with email password
    createUser(email, password)
      .then((result: any) => {
        const user = result.user;
        console.log(user);

        // update profile name
        const profileName = {
          displayName: name,
        };
        profileUpdated(profileName)
        .then((resuls: any) => {
            console.log(profileName)
            toast.success("SignUp sucessfull");
            navigate("/");
            console.log(resuls);
          })
          .catch((error: any) => console.error(error));
      })
      .catch((error: any) => {
        console.error(error);
      });
  };
  return (
    <div className="container">
      <div className="singup-section">
        <h1>SignUp</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-type">
            <span className="label-text">FullName</span>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Mitchel Smith"
              required
            />
          </div>
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
          <button>
            <BiDownload className="icon" /> Sign Up
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">LogIn</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
