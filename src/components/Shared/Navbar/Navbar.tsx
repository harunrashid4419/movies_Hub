import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";
import { toast } from "react-hot-toast";
import { FaAlignRight } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut }: any = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("LogOut successfull");
      })
      .catch(() => {});
  };

  const menu = (
    <li>
      <NavLink
        style={{ textDecoration: "none" }}
        className={({ isActive }) => (isActive ? "text-red-500" : "undefined")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={{ textDecoration: "none" }}
        className={({ isActive }) => (isActive ? "text-red-500" : "undefined")}
        to="/movies"
      >
        Movies
      </NavLink>
      <NavLink
        style={{ textDecoration: "none" }}
        className={({ isActive }) => (isActive ? "text-red-500" : "undefined")}
        to="/about"
      >
        About Us
      </NavLink>
      <NavLink
        style={{ textDecoration: "none" }}
        className={({ isActive }) => (isActive ? "text-red-500" : "undefined")}
        to="/contact"
      >
        Contact Us
      </NavLink>
      {user && (
        <NavLink
          style={{ textDecoration: "none" }}
          className={({ isActive }) =>
            isActive ? "text-red-500" : "undefined"
          }
          to="/movieRequest"
        >
          Request Movie
        </NavLink>
      )}
      {user && (
        <NavLink
          style={{ textDecoration: "none" }}
          className={({ isActive }) =>
            isActive ? "text-red-500" : "undefined"
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      )}
      {!user ? (
        <NavLink
          style={{ textDecoration: "none" }}
          className={({ isActive }) =>
            isActive ? "text-red-500" : "undefined"
          }
          to="/login"
        >
          Login
        </NavLink>
      ) : (
        <p onClick={handleLogOut}>LogOut</p>
      )}
    </li>
  );
  return (
    <div className="bg-black text-white shadow-md">
      <div className="navbar flex justify-between container">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="bg-black menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link className="text-3xl text-green-700 font-bold" to="/">
            Movies<span className="text-red-500">Hub</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-primary drawer-button lg:hidden bg-transparent border-none"
        >
          <FaAlignRight />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
